'use client';

import { deleteProject } from '@core/services/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { TbTrashXFilled, TbEdit, TbLoader } from 'react-icons/tb';
import { toast } from 'react-toastify';

const Project = ({ project, index }) => {
    const queryClient = useQueryClient();
    const deleteProjectMutation = useMutation({
        mutationFn: (data) => deleteProject(data)
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

    return (
        <div className="flex mb-4 items-center gap-4">
            <span className="aspect-square w-10 rounded-full bg-yellow-500 flex items-center justify-center">
                {index + 1}
            </span>
            <Link href={`/tasks/${project.id}`} className="grow">
                {project.name}
            </Link>

            {deleteProjectMutation.isLoading ? (
                <TbLoader className="animate-spin text-xl" />
            ) : (
                <>
                    <button>
                        <TbEdit className="text-blue-400 text-xl" />
                    </button>

                    <button className="text-red-400" onClick={() => handleDeleteProject(project.id)}>
                        <TbTrashXFilled />
                    </button>
                </>
            )}
        </div>
    );
};

export default Project;
