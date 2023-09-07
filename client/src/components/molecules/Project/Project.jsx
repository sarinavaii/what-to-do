'use client';

import { Modal } from '@components/atoms';
import { deleteProject } from '@core/services/api';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import updateProject from '@core/services/api/projects/update-project.api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { TbTrashXFilled, TbEdit, TbLoader } from 'react-icons/tb';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const Project = ({ project, index }) => {
    const queryClient = useQueryClient();

    const schema = yup
        .object({
            name: yup.string().required('Project name is required')
        })
        .required();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            name: ''
        },
        resolver: yupResolver(schema)
    });

    const deleteProjectMutation = useMutation({
        mutationFn: (data) => deleteProject(data)
    });
    const updateProjectMutation = useMutation({
        mutationFn: (data) => updateProject({ ...data, id: +project.id })
    });

    const handleDeleteProject = async (id) => {
        deleteProjectMutation.mutate(
            { id: +id },
            {
                onSuccess: (data) => {
                    toast.info(data.message);
                    queryClient.invalidateQueries();
                }
            }
        );
    };

    const handleUpdateProject = async (data) => {
        updateProjectMutation.mutate(data, {
            onSuccess: (data) => {
                reset();
                window[`update_project_${project.id}`].close();
                queryClient.invalidateQueries();
                toast.success(data.message);
            }
        });
    };

    return (
        <div className="flex mb-4 items-center gap-4">
            <span className="aspect-square w-10 rounded-full bg-yellow-500 flex items-center justify-center">
                {index + 1}
            </span>
            <Link href={`/project/${project.id}`} className="grow">
                {project.name}
            </Link>

            {deleteProjectMutation.isLoading ? (
                <TbLoader className="animate-spin text-xl" />
            ) : (
                <>
                    <button onClick={() => window[`update_project_${project.id}`].show()}>
                        <TbEdit className="text-blue-400 text-xl" />
                    </button>

                    <button className="text-red-400" onClick={() => handleDeleteProject(project.id)}>
                        <TbTrashXFilled />
                    </button>
                </>
            )}

            <Modal id={`update_project_${project.id}`} title="Edit Project">
                <div className="mb-3">Please enter the new name of your project</div>
                <form onSubmit={handleSubmit(handleUpdateProject)} className="flex">
                    <input
                        className="grow bg-white border-none text-black p-4 !outline-none rounded-tl rounded-bl"
                        {...register('name')}
                    />
                    <button className="p-4 border-none bg-emerald-600 rounded-tr rounded-br" type="submit">
                        Update
                    </button>
                </form>
                {errors.name && <div className="text-red-400 text-sm">{errors.name.message}</div>}
            </Modal>
        </div>
    );
};

export default Project;
