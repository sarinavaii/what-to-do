'use client';

const Task = ({ task, index }) => {
    return (
        <div className="flex mb-4 items-center gap-4">
            <span className="aspect-square w-10 rounded-full bg-yellow-500 flex items-center justify-center">
                {index + 1}
            </span>
            <span className="grow">{task.name}</span>
        </div>
    );
};

export default Task;
