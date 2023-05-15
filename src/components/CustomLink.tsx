import { Link } from "react-router-dom";

export function CustomLink({
  text,
  iconClasses,
  location,
  customCss = "",
}: {
  text: string;
  iconClasses?: string;
  location: string;
  customCss?: string;
}) {
  return (
    <Link
      to={location}
      className={`cursor-pointer select-none rounded-lg p-4 font-bold transition-transform hover:scale-105 ${customCss}`}
    >
      <span>{text}</span>
      {iconClasses && <i className={iconClasses} />}
    </Link>
  );
}
