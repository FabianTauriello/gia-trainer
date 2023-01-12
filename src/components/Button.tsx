const Button: React.FC<{ text: string; handleClick: () => void }> = ({ text, handleClick }) => {
  return (
    <button className="bg-blue p-3 rounded text-white hover:bg-opacity-80" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
