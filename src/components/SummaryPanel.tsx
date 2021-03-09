
import { Button } from "./Button";
import { ButtonWrap } from "./ButtonGroup";
import { RaisedCanvas } from "./CenterPanel";
import { Heading } from "./Heading";
interface SP_Props {
  elapsedTime: number;
}

export const SummaryPanel = ({ elapsedTime }: SP_Props) => {
  const handleNewSession = () => {
    window.location.href = "/";
  };
  return (
    <RaisedCanvas>
      <Heading />
      <h1>You meditated for {elapsedTime} seconds</h1>
      <p>
        Congratulations you meditated for {elapsedTime} seconds. That may not
        seem like a lot but even the smallest moments can have a big impact.
        Take a little bit more peace into the rest of your day{" "}
      </p>
      <ButtonWrap>
        <a href="mailto:?subject=Mindful%20Moments%20With%20Mantra&body=I%20spent%20a%20few%20mindful%20moments%20reflecting.%0D%0A%0D%0AYou%can%20too%20at%20%">
          <Button text="Share" />
        </a>
        <Button text="New Session" onClick={handleNewSession} />
      </ButtonWrap>
    </RaisedCanvas>
  );
};
