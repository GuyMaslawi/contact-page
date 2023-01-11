import {
  BackgroundGreetingWrapper,
  ButtonStyle,
  DemoRequest,
} from "./BackgroundGreeting.style";

const BackgroundGreeting = () => {
  return (
    <BackgroundGreetingWrapper>
      <DemoRequest>
        <h1>Contact Us</h1>
        <h3>
          <div>Please complete the request form</div>
          <div>and we will contact you shortly.</div>
        </h3>
        <ButtonStyle variant="outlined">Request 1:1 Demo</ButtonStyle>
      </DemoRequest>
    </BackgroundGreetingWrapper>
  );
};

export default BackgroundGreeting;
