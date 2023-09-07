import { Task } from '@components/molecules';

const TaskListOrganism = ({ tasks }) => {
    return (
        <div className="text-white">
            {tasks.map((task, index) => {
                return <Task task={task} key={task.id} index={index} />;
            })}
        </div>
    );
};

export default TaskListOrganism;
