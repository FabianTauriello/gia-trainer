import { Link } from "react-router-dom";

// TODO extend react-router link props (like i did with custom button)
interface CustomLinkProps {
  text: string;
  to: string;
  cta?: boolean;
  navLink?: boolean;
  customCss?: string;
  withoutBackground?: boolean;
}

export function CustomLink({ text, to, cta = false, navLink = false, customCss = "", withoutBackground = false }: CustomLinkProps) {
  if (withoutBackground) {
    return (
      <Link to={to} className={`dark:text-blue-400 text-blue-700 hover:underline ${customCss} font-semibold`}>
        {text}
      </Link>
    );
  }

  return (
    <Link
      to={to}
      className={`cursor-pointer select-none rounded-lg font-bold transition-transform hover:scale-105 ${customCss} ${
        cta ? "bg-emerald-600 text-white" : "bg-black text-white dark:bg-white dark:text-black"
      } ${navLink ? "p-3" : "p-4"}`}
    >
      <span>{text}</span>
    </Link>
  );
}
