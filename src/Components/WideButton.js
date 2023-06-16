export default function({
    text, 
    onClick,
}) {
    return <div 
        className="widebutton button"
        onClick={onClick}
    >
        <span className="return">
            {text}
        </span>
    </div>;
};