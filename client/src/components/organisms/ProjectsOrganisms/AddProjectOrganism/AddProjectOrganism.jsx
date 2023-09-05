'use client';

import { Modal } from '@components/atoms';
import { TbLayoutGridAdd } from 'react-icons/tb';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { addProject } from '@core/services/api';

const AddProjectOrganism = () => {
    const schema = yup
        .object({
            name: yup.string().required('Project name is required')
        })
        .required();

    const {
        register,
        handleSubmit,
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
        console.log(data);
        addProjectMutation.mutate(data);
    };

    return (
        <>
            <button onClick={() => window.add_project.showModal()} className="flex items-center gap-4 mb-4">
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
                {errors && <div className="text-red-400 text-sm">{errors.name?.message}</div>}
            </Modal>
        </>
    );
};

export default AddProjectOrganism;
