import { useState } from "react";
import { Section } from "utils/Types";
import CustomButton from "./CustomButton";
import SectionLanding from "./SectionLanding";

const SectionContainer = ({ section, handleFinishSection }: { section: Section; handleFinishSection: () => void }) => {
  const [sectionHasStarted, setSectionHasStarted] = useState(false);

  if (!sectionHasStarted) {
    return <SectionLanding section={section} handleStartSection={() => setSectionHasStarted(true)} />;
  }

  return <div></div>;
};

export default SectionContainer;
