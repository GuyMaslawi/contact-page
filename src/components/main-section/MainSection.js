import BackgroundGreeting from "../background-greeting/BackgroundGreeting";
import Form from "../form/Form";
import { MainSectionWrapper } from "./MainSection.style";

const MainSection = () => {
  return (
    <MainSectionWrapper>
      <BackgroundGreeting />
      <Form />
    </MainSectionWrapper>
  );
};

export default MainSection;
