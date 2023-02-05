import { Section } from "utils/Types";

const SectionContainer = ({ section }: { section: Section }) => {
  return (
    <div>
      <div>{section.title}</div>
      <div>
        <p>{section.description}</p>
        <p>{section.note}</p>
      </div>
    </div>
  );
};

export default SectionContainer;
