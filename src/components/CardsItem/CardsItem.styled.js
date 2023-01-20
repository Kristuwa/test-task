import styled from 'styled-components';
import bgImg from '../../img/Photo.png';
import bgImgBig from '../../img/Photo@2x.png';
export const CardsItemElem = styled.li`
  width: 290px;
  position: relative;
  @media screen and (min-width: 375px) {
    width: 320px;
  }
`;

export const CardTop = styled.div`
  padding: 21px 16px 33px 51px;
`;
export const Card = styled.div`
  background-color: #f2f2f2;

  background-image: url(${bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 368px 360px;
  background-position: -24px 208px;
  position: absolute;
  top: 4px;
  left: 4px;
  width: 282px;
  height: 480px;
  background-color: #f2f2f2;
  border-radius: 11px;
  clip-path: polygon(14.7% 0, 100% 0, 100% 100%, 0 100%, 0 9.7%);

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgImgBig});
  }

  @media screen and (min-width: 375px) {
    width: 320px;
  }
`;

export const CardContainer = styled.div`
  position: relative;
  width: 290px;
  height: 488px;
  background-color: #2ea8e6;
  border-radius: 14px;
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 10%);
  margin-bottom: 14px;

  @media screen and (min-width: 375px) {
    width: 328px;
  }
`;
export const TitleTopText = styled.p`
  font-family: 'Trebuchet MS';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.19;
  color: #666666;
  margin-bottom: 5px;
`;

export const TitleCard = styled.h2`
  font-family: 'Trebuchet MS';
  font-weight: 700;
  font-size: 48px;
  line-height: 1.17;
  color: #000000;
`;

export const TitleBottomText = styled.p`
  font-family: 'Trebuchet MS';
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: #000000;
  margin-bottom: 15px;
`;

export const TextPortions = styled.p`
  font-family: 'Trebuchet MS';
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  color: #666666;
`;

export const TextGift = styled.p`
  width: 140px;
  font-family: 'Trebuchet MS';
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  color: #666666;
`;

export const BottomText = styled.p`
  font-family: 'Trebuchet MS';
  font-weight: 400;
  font-size: 13px;
  line-height: 1.15;
  text-align: center;
  color: #ffffff;
`;

export const ContentContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 194px;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: #1698d9;
  padding: 20px 10px 8px;
  @media screen and (min-width: 375px) {
    left: 224px;
  }
`;

export const Text = styled.p`
  font-family: 'Trebuchet MS';
  font-weight: 400;
  font-size: 42px;
  line-height: 0.52;
  text-align: center;
  color: #ffffff;
  margin-bottom: 12px;
  & + p {
    font-family: 'Trebuchet MS';
    font-weight: 400;
    font-size: 24px;
    line-height: 0.52;
    text-align: center;
    color: #ffffff;
  }
`;
