const CustomButton = ({ text, handleClick }: { text: string; handleClick: () => void }) => {
  return <button onClick={handleClick}>{text}</button>;
};

export default CustomButton;
