// TODO rename after
const Btn1: React.FC<{ type: "primary" | "secondary"; text: string; handleClick: () => void; iconClasses: string }> = ({
  type,
  text,
  handleClick,
  iconClasses = "",
}) => {
  return (
    <div className="p-3 rounded">
      <a>
        <span>{text}</span>
        {iconClasses !== "" && <i className={iconClasses} />}
      </a>
    </div>
  );
};

export default Btn1;
