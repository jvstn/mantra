import styled from "styled-components";
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
      <AmountMeditated>
        You meditated for <br/>
        {elapsedTime}
        <br/>
        seconds
      </AmountMeditated>
      <EncouragingMessage>
        The smallest moments can have a big impact.
        <br />
        <br/>
        Take a little more peace into the rest of your day
      </EncouragingMessage>
      <ButtonWrap>
        <a href="mailto:?subject=Mindful%20Moments%20With%20Mantra&body=I%20spent%20a%20few%20mindful%20moments%20reflecting.%0D%0A%0D%0AYou%can%20too%20at%20%https://minutemantra.netlify.app/">
          <Button text="Share" />
        </a>
        <Button text="New Session" onClick={handleNewSession} />
      </ButtonWrap>
    </RaisedCanvas>
  );
};

const AmountMeditated = styled.h2`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
const EncouragingMessage = styled.p`
  padding: 0vh 6vh;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
