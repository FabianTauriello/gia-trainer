interface BannerProps {
  title: string;
  subtitle?: string;
}

export function Banner({ title, subtitle }: BannerProps) {
  return (
    <div className="bg-primary-500 px-4 py-8 text-white lg:px-28">
      <h1 className="text-4xl font-extrabold">{title}</h1>
      {subtitle && <h3 className="text-4xl font-extrabold">{subtitle}</h3>}
    </div>
  );
}
