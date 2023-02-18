import { Section } from "domain/Types";
import CustomButton from "./CustomButton";

function SectionLanding({ section, handleStartSection }: { section: Section; handleStartSection: () => void }) {
  return (
    <div>
      <div className="py-8 px-8 bg-green">
        <h1 className="text-4xl font-extrabold">
          Section {section.number}: {section.title}
        </h1>
      </div>
      <div className="py-8 px-8">
        <p>{section.description}</p>
        <p>{section.note}</p>
      </div>
      <CustomButton text="Start Section" handleClick={handleStartSection} customCss="ml-8" />
    </div>
  );
}

export default SectionLanding;
