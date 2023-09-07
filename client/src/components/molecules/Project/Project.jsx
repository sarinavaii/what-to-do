'use client';

import { deleteProject } from '@core/services/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useState } from 'react';
import { TbTrashXFilled, TbEdit } from 'react-icons/tb';
import { toast } from 'react-toastify';

const Project = ({ project, index }) => {
    const queryClient = useQueryClient();
    const deleteProjectMutation = useMutation({
        mutationFn: (data) => deleteProject(data)
    });

    const handleDeleteProject = async (data) => {
        deleteProjectMutation.mutate(
            { id: +data },
            {
                onSuccess: (data) => {
                    toast.info(data.message);
                    queryClient.invalidateQueries();
                }
            }
        );
    };

    return (
        <div className="flex mb-4 items-center gap-4">
            <span className="aspect-square w-10 rounded-full bg-yellow-500 flex items-center justify-center">
                {index + 1}
            </span>
            <Link href={`/tasks/${project.id}`} className="grow">
                {project.name}
            </Link>
            <button>
                <TbEdit className="text-blue-400 text-xl" />
            </button>

            <button
                disabled={deleteProjectMutation.isLoading}
                className="text-red-400 text-xl disabled:text-gray-400"
                onClick={() => handleDeleteProject(project.id)}
            >
                <TbTrashXFilled />
            </button>
        </div>
    );
};

export default Project;
