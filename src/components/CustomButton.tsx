function CustomButton({ text, handleClick, customCss }: { text: string; handleClick: () => void; customCss?: string }) {
  return (
    <button className={`p-4 rounded-lg cursor-pointer bg-primary text-white ${customCss}`} onClick={handleClick}>
      {text}
    </button>
  );
}

export default CustomButton;
