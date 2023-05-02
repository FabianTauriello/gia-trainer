import { Link } from "react-router-dom";

export function CustomLink({ text, iconClasses, customCss = "" }: { text: string; iconClasses?: string; customCss?: string }) {
  return (
    <Link
      to={"/quiz/visitor"}
      className={`cursor-pointer select-none rounded-lg p-4 font-bold transition-transform hover:scale-105 ${customCss}`}
    >
      <span>{text}</span>
      {iconClasses && <i className={iconClasses} />}
    </Link>
  );
}
