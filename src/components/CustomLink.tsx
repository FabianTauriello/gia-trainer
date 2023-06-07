import { Link } from "react-router-dom";

export function CustomLink({
  text,
  location,
  cta = false,
  navLink = false,
  customCss = "",
}: {
  text: string;
  location: string;
  cta?: boolean;
  navLink?: boolean;
  customCss?: string;
}) {
  return (
    <Link
      to={location}
      className={`cursor-pointer select-none rounded-lg font-bold transition-transform hover:scale-105 ${customCss} ${
        cta ? "bg-emerald-600 text-white" : "bg-black text-white dark:bg-white dark:text-black"
      } ${navLink ? "p-3" : "p-4"}`}
    >
      <span>{text}</span>
    </Link>
  );
}
