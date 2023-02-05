import { Section } from "utils/Types";
import CustomButton from "./CustomButton";

const SectionLanding = ({ section, handleStartSection }: { section: Section; handleStartSection: () => void }) => {
  return (
    <div>
      <div className="py-8 px-8">
        <h1 className="text-4xl font-extrabold">
          Section {section.number}: {section.title}
        </h1>
      </div>
      <div className="py-8 px-8">
        <p>{section.description}</p>
        <p>{section.note}</p>
        <CustomButton text="Start Section" handleClick={handleStartSection} />
      </div>
    </div>
  );
};

export default SectionLanding;
