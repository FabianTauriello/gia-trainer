import { Link } from "react-router-dom";

// TODO rename after
function Btn1({
  type,
  text,
  handleClick,
  iconClasses,
  customCss = "",
}: {
  type?: "primary" | "secondary";
  text: string;
  handleClick: () => void;
  iconClasses?: string;
  customCss?: string;
}) {
  return (
    <Link
      to={"/quiz"}
      className={`hover:scale-105 transition-transform p-4 rounded-lg cursor-pointer font-bold select-none ${customCss}`}
    >
      <span>{text}</span>
      {iconClasses && <i className={iconClasses} />}
    </Link>
  );
}

export default Btn1;
