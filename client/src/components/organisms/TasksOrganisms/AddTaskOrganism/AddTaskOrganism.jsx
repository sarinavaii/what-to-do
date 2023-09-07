'use client';

import { Modal } from '@components/atoms';
import { TbLayoutGridAdd } from 'react-icons/tb';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTask } from '@core/services/api';

const AddTaskOrganism = ({ params }) => {
    const queryClient = useQueryClient();
    const schema = yup
        .object({
            name: yup.string().required('Task name is required')
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

    const addTaskMutation = useMutation({
        mutationFn: (data) => addTask(data)
    });

    const handleAddTask = async (data) => {
        addTaskMutation.mutate(
            { ...data, projectsId: +params.id },
            {
                onSuccess: () => {
                    reset();
                    window.add_task.close();
                    queryClient.invalidateQueries();
                }
            }
        );
    };

    return (
        <>
            <button onClick={() => window.add_task.show()} className="flex items-center gap-4 mb-4">
                <span className="aspect-square w-10 rounded-full bg-emerald-600 text-xl flex items-center justify-center">
                    <TbLayoutGridAdd />
                </span>
                Add a new Task
            </button>

            <Modal id="add_task" title="Add Task">
                <div className="mb-3">Please enter the name of your task</div>
                <form onSubmit={handleSubmit(handleAddTask)} className="flex">
                    <input
                        className="grow bg-white border-none text-black p-4 !outline-none rounded-tl rounded-bl"
                        {...register('name')}
                    />
                    <button className="p-4 border-none bg-emerald-600 rounded-tr rounded-br" type="submit">
                        Add
                    </button>
                </form>
                {errors.name && <div className="text-red-400 text-sm">{errors.name.message}</div>}
            </Modal>
        </>
    );
};

export default AddTaskOrganism;
