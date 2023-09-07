'use client';

import { Modal } from '@components/atoms';
import { TbLayoutGridAdd } from 'react-icons/tb';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addProject } from '@core/services/api';

const AddProjectOrganism = () => {
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

    const addProjectMutation = useMutation({
        mutationFn: (data) => addProject(data)
    });

    const handleAddProject = async (data) => {
        addProjectMutation.mutate(data, {
            onSuccess: () => {
                reset();
                window.add_project.close();
                queryClient.invalidateQueries();
            }
        });
    };

    return (
        <>
            <button onClick={() => window.add_project.show()} className="flex items-center gap-4 mb-4">
                <span className="aspect-square w-10 rounded-full bg-emerald-600 text-xl flex items-center justify-center">
                    <TbLayoutGridAdd />
                </span>
                Add a new project
            </button>

            <Modal id={'add_project'} title="Add Project">
                <div className="mb-3">Please enter the name of your project</div>
                <form onSubmit={handleSubmit(handleAddProject)} className="flex">
                    <input
                        className="grow bg-white border-none text-black p-4 !outline-none rounded-tl rounded-bl"
                        {...register('name')}
                    />
                    <button className="p-4 border-none bg-emerald-600 rounded-tr rounded-br" type="submit">
                        Add
                    </button>
                </form>
                {errors.name && errors.name.map((error) => <div className="text-red-400 text-sm">{error}</div>)}
            </Modal>
        </>
    );
};

export default AddProjectOrganism;
