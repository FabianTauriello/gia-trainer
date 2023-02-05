import { Link } from "react-router-dom";

// TODO rename after
const Btn1: React.FC<{
  type?: "primary" | "secondary";
  text: string;
  handleClick: () => void;
  iconClasses?: string;
  customCss?: string;
}> = ({ type, text, handleClick, iconClasses, customCss = "" }) => {
  return (
    <div className={`hover:scale-105 transition-transform p-4 rounded-lg cursor-pointer font-bold ${customCss}`}>
      <Link to={"/quiz"}>
        <span style={{}}>{text}</span>
        {iconClasses && <i className={iconClasses} />}
      </Link>
    </div>
  );
};

export default Btn1;
