import styled, { css } from 'styled-components';
import KingPadSvg from '../assets/svg/kingpad.svg';
import KingLogoSvg from '../assets/svg/footerlogo.svg';
import DeskKingpadVisualSvg from '../assets/png/kingpad-visual.png';
import MobKingpadVisualSvg from '../assets/png/kingpad-visual-mobile.png';
import TelegramSvg from '../assets/icon/icon-telegram.svg';
import TwitterSvg from '../assets/icon/icon-twitter.svg';

export const ComingSoon = () => {
  return (
    <Wrapper>
      <Container>
        <KingpadLogo src={KingPadSvg} alt="king-pad-logo" />
        <KingpadVisual src={DeskKingpadVisualSvg} className="sm:block hidden" />
        <KingpadVisual src={MobKingpadVisualSvg} className="sm:hidden block w-[480px]" />
        <ButtonGroup>
          <SocialLeftBtn>
            <Img src={TelegramSvg} alt="telegra-svg" />
          </SocialLeftBtn>
          <SocialRightBtn>
            <Img src={TwitterSvg} alt="telegra-svg" />
          </SocialRightBtn>
        </ButtonGroup>
        <PoweredBy>
          <SmallText>Powered by</SmallText>
          <KingLogo src={KingLogoSvg} alt="king-logo" />
        </PoweredBy>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const KingpadLogo = styled.img`
  width: 110px;
  height: auto;
`;

const KingpadVisual = styled.img`
  width: 640px;
  height: auto;
  padding-top: 1rem;
`;

const ButtonGroup = styled.div`
  background: #171717 0% 0% no-repeat padding-box;
  border-radius: 31px;
  height: 60px;
  width: 120px;
  display: flex;
  margin-top: 0.5rem;
  @media screen and (max-width: 640px) {
    height: 40px;
  }
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
`;

const SocialBtn = css`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all linear 0.3s;
  &:hover {
    background-color: rgb(34, 33, 33);
  }
  @media screen and (max-width: 640px) {
    height: 40px;
  }
`;

const SocialLeftBtn = styled.div`
  ${SocialBtn}
  border-radius: 31px 0 0 31px;
`;
const SocialRightBtn = styled.div`
  ${SocialBtn}
  border-radius: 0 31px 31px 0;
`;

const PoweredBy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem;
`;

const SmallText = styled.div`
  font-size: 16px;
`;

const KingLogo = styled.img`
  width: 80px;
  height: 80px;
`;
