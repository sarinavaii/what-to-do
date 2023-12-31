import { AddProjectOrganism, ProjectsListOrganism } from '@components/organisms';

const ProjectsTemplate = () => {
    return (
        <div className="p-8">
            <h1 className="text-yellow-500 text-2xl mb-2 font-bold uppercase">Projects</h1>
            <hr className="border-dashed mb-4" />
            <AddProjectOrganism />
            <ProjectsListOrganism />
        </div>
    );
};

export default ProjectsTemplate;
