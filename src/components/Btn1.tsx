// TODO rename after
const Btn1: React.FC<{
  type?: "primary" | "secondary";
  text: string;
  handleClick: () => void;
  iconClasses?: string;
  customCss?: string;
}> = ({ type, text, handleClick, iconClasses, customCss = "" }) => {
  return (
    <div className={`hover:scale-105 transition-transform p-4 rounded-lg cursor-pointer bg-black ${customCss}`}>
      <a>
        <span>{text}</span>
        {iconClasses && <i className={iconClasses} />}
      </a>
    </div>
  );
};

export default Btn1;
