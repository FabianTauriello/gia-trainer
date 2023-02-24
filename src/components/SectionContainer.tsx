import { ReactNode } from "react";

function SectionContainer({
  onClickCapture,
  children,
}: {
  onClickCapture?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children: ReactNode;
}) {
  return (
    <div className="bg-primary h-screen flex flex-col justify-center align-middle" onClickCapture={onClickCapture}>
      {children}
    </div>
  );
}

export default SectionContainer;
