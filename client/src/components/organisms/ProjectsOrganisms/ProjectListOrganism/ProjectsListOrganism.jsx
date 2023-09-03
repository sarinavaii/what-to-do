'use client';

import { Project } from '@components/molecules';
import { getProjects } from '@core/services/api';

import { useQuery } from '@tanstack/react-query';

const ProjectsListOrganism = () => {
    const { isLoading, isError, error, isSuccess, data } = useQuery({
        queryKey: ['projects'],
        queryFn: () => getProjects()
    });

    return (
        <div className="text-white">
            {[1, 2, 3, 4].map((item) => {
                return <Project />;
            })}
        </div>
    );
};

export default ProjectsListOrganism;
