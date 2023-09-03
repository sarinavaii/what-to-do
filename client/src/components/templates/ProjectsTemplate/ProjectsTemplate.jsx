import { TbLayoutGridAdd } from 'react-icons/tb';

import { ProjectsListOrganism } from '@components/organisms';

const ProjectsTemplate = () => {
    return (
        <div className="p-8">
            <h1 className="text-yellow-500 text-4xl mb-2 font-bold">Projects</h1>
            <hr className="border-dashed mb-4" />
            <button className="flex items-center gap-4 mb-4">
                <span className="aspect-square w-10 rounded-full bg-emerald-600 text-xl flex items-center justify-center">
                    <TbLayoutGridAdd />
                </span>
                Add a new project
            </button>
            <ProjectsListOrganism />
        </div>
    );
};

export default ProjectsTemplate;
