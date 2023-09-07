'use client';

import { TaskListOrganism } from '@components/organisms';
import { getTasks } from '@core/services/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { TbLoader } from 'react-icons/tb';

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
            <h1 className="text-yellow-500 text-2xl mb-2 font-bold uppercase">{data.data.name}</h1>
            <hr className="border-dashed mb-4" />
            <TaskListOrganism tasks={data.data.tasks} />
        </div>
    );
}

export default TasksTemplate;
