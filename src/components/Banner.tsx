interface BannerProps {
  title: string;
  subtitle?: string;
}

export function Banner({ title, subtitle }: BannerProps) {
  return (
    <div className="bg-primary-500 px-4 py-10 text-white lg:px-28 border-b border-b-slate-200 dark:border-b-slate-900 bg-darkSlate dark:text-white">
      <h1 className="text-4xl font-extrabold">{title}</h1>
      {subtitle && <h3 className="text-4xl font-extrabold">{subtitle}</h3>}
    </div>
  );
}
