export function Banner({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="py-8 px-8 bg-secondary text-white">
      <h1 className="text-4xl font-extrabold">{title}</h1>
      {subtitle && <h3 className="text-4xl font-extrabold">{subtitle}</h3>}
    </div>
  );
}
