const Button: React.FC<{ text: string; handleClick: () => void }> = ({ text, handleClick }) => {
  return (
    <button className="my-4 bg-slate-200 p-2 rounded text-slate-900" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
