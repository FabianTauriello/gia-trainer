import { ReactNode } from "react";

function SectionContainer({ onClick, children }: { onClick?: () => void; children: ReactNode }) {
  return (
    <div className="bg-primary h-screen flex flex-col justify-center align-middle" onClick={onClick}>
      {children}
    </div>
  );
}

export default SectionContainer;
