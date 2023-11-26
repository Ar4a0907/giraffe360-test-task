interface Props {
    text: string
    onClick: () => void
}

const Button = ({ text, onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            className="text-xs font-bold bg-yellow px-2 py-3 rounded-md hover:scale-110 duration-200 ease-in-out"
        >
            {text}
        </button>
    );
};

export default Button;