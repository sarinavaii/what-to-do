import { Task } from '@components/molecules';

const TaskListOrganism = ({ tasks }) => {
    return (
        <div className="text-white">
            {tasks.map((project, index) => {
                return <Task project={project} key={project.id} index={index} />;
            })}
        </div>
    );
};

export default TaskListOrganism;
