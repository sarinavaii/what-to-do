import Link from 'next/link';
import { TbTrashXFilled, TbEdit } from 'react-icons/tb';

const Project = () => {
    return (
        <div className="flex mb-4 items-center gap-4">
            <span className="aspect-square w-10 rounded-full bg-yellow-500 flex items-center justify-center">1</span>
            <Link href="/" className="grow">
                Project Name
            </Link>
            <button>
                <TbEdit class="text-blue-400 text-xl" />
            </button>
            <button>
                <TbTrashXFilled class="text-red-400 text-xl" />
            </button>
        </div>
    );
};

export default Project;
