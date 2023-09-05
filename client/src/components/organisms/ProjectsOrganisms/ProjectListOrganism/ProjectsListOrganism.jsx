'use client';

import { Project } from '@components/molecules';
import { getProjects } from '@core/services/api';

import { useQuery } from '@tanstack/react-query';

const ProjectsListOrganism = () => {
    const { isLoading, isError, data } = useQuery({
        queryKey: ['projects'],
        queryFn: () => getProjects()
    });

    if (isLoading) {
        return <div>Loading data...</div>;
    }

    if (isError) {
        return <div>Something went wrong...</div>;
    }

    return (
        <div className="text-white">
            {data.data.map((project, index) => {
                return <Project project={project} key={project.id} index={index} />;
            })}
        </div>
    );
};

export default ProjectsListOrganism;
