import React from "react";
import {
  HeadContainer,
  HeadBg,
  VideoBg,
  HeadContentRight,
  HeadH1Right,
  HeadPRight,
  HeadBtnWrapper,
  ButtonHead,
  HeadRow,
} from "./HeadElements";
import video from "../../videos/video4.mp4";

const HeadSection = ({ faithStart }) => {


  return (
    <HeadContainer id="home">
      <HeadBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeadBg>
      <HeadRow faithStart={faithStart}>
        <HeadContentRight>
          <HeadH1Right className="title">El regalo más grande</HeadH1Right>
          <HeadPRight className="title">
            Solo Jesucristo puede darte una vida nueva. Hay grandes cosas que El
            tiene para ti. ¿Quieres conocerlas?
          </HeadPRight>
          <HeadBtnWrapper>
            <ButtonHead
              to="/quiero"
              className="title"
            >
              Si, quiero.
            </ButtonHead>
          </HeadBtnWrapper>
        </HeadContentRight>
      </HeadRow>
    </HeadContainer>
  );
};

export default HeadSection;
