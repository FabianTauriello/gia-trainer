interface CustomTitleProps {
  title: string;
  errorTint?: boolean;
}

export function CustomTitle({ title, errorTint = false }: CustomTitleProps) {
  return (
    <div
      className={`pt-10 pb-4 border-b border-b-slate-200  dark:border-b-slate-900 ${
        errorTint ? "text-red-600 dark:text-red-500" : "text-black dark:text-white"
      }`}
    >
      <h1 className="text-4xl font-extrabold">{title}</h1>
    </div>
  );
}
