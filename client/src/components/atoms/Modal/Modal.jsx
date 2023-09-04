import { TbCircleX } from 'react-icons/tb';

const Modal = ({ id, title, children }) => {
    return (
        <dialog id={id} className="modal">
            <div className="modal-box max-w-2xl bg-zinc-800">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <form method="dialog">
                        <button>
                            <TbCircleX size={24} />
                        </button>
                    </form>
                </div>
                {children}
            </div>
        </dialog>
    );
};

export default Modal;
