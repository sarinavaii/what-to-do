'use client';

import { AddTaskOrganism, TaskListOrganism } from '@components/organisms';
import { getTasks } from '@core/services/api';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { TbChevronLeft, TbLoader } from 'react-icons/tb';

function TasksTemplate() {
    const params = useParams();
    const { isLoading, isError, data } = useQuery({
        queryKey: ['tasks', [params]],
        queryFn: () => getTasks(params.id)
    });

    if (isLoading) {
        return (
            <div className="h-screen flex items-center justify-center text-center">
                <TbLoader className="animate-spin text-2xl" />
            </div>
        );
    }

    if (isError) {
        return <div className="p-8">Something went wrong...</div>;
    }

    return (
        <div className="p-8">
            <div className=" flex gap-2 items-center text-2xl mb-2 font-bold uppercase">
                <Link href="/" className="text-3xl pr-2 text-white">
                    <TbChevronLeft />
                </Link>
                <h1>{data.data.name} Tasks</h1>
            </div>
            <hr className="border-dashed mb-4" />
            <AddTaskOrganism params={params} />
            <TaskListOrganism tasks={data.data.tasks} />
        </div>
    );
}

export default TasksTemplate;
