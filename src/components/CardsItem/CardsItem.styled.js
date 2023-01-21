import styled from 'styled-components';
import bgImg from '../../img/Photo.png';
import bgImgBig from '../../img/Photo@2x.png';

export const CardsItemElem = styled.li`
  cursor: pointer;
  width: 290px;
  position: relative;
  @media screen and (min-width: 375px) {
    width: 312px;
  }
`;

export const ContainerNoActive = styled.div`
  ${props => {
    if (props.balance === 0) {
      return 'background-color: #F2F2F2; opacity: 0.65; position:absolute; width: 290px; height: 488px; top:0; left:0;z-index:1;border-radius: 14px; clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 10%); margin-bottom: 14px; @media screen and (min-width: 375px) {width: 320px;}';
    }
  }}
`;

export const CardTop = styled.div`
  padding: 21px 16px 33px 51px;
`;
export const Card = styled.div`
  background-color: ${props => props.theme.colors.backgroundColor};

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
  border-radius: 11px;
  clip-path: polygon(14.7% 0, 100% 0, 100% 100%, 0 100%, 0 9.7%);

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgImgBig});
  }

  @media screen and (min-width: 375px) {
    width: 312px;
  }
`;

export const ContentContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 194px;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: ${props => {
    if (props.value) {
      return props.theme.colors.pinkBackgroundColor;
    }
    if (props.balance === 0) {
      return props.theme.colors.greyBackgroundColor;
    }
    return props.theme.colors.blueBackgroundColor;
  }};
  padding: 20px 10px 8px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 375px) {
    left: 224px;
  }
`;

export const CardContainer = styled.div`
  position: relative;
  width: 290px;
  height: 488px;
  background-color: ${props => {
    if (props.value) {
      return props.theme.colors.pinkBackgroundColor;
    }
    if (props.balance === 0) {
      return props.theme.colors.greyBackgroundColor;
    }
    return props.theme.colors.blueBackgroundColor;
  }};
  border-radius: 14px;
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 10%);
  margin-bottom: 14px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 375px) {
    width: 320px;
  }

  &:hover,
  &:focus {
    background-color: ${props => {
      if (props.value) {
        return props.theme.colors.selectedHoverColor;
      }

      return props.theme.colors.hoverBackgroundColor;
    }};
  }

  &:hover ${ContentContainer}, &:focus ${ContentContainer} {
    background-color: ${props => {
      if (props.value) {
        return props.theme.colors.selectedHoverColor;
      }
      return props.theme.colors.hoverBackgroundColor;
    }};
  }
`;
export const TitleTopText = styled.p`
  font-family: ${props => props.theme.fonts.mainFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.19;
  color: #666666;
  margin-bottom: 5px;
`;

export const TitleCard = styled.h2`
  font-family: ${props => props.theme.fonts.mainFont};
  font-weight: 700;
  font-size: 48px;
  line-height: 1.17;
  color: ${props => props.theme.colors.secondaryTextColor};
`;

export const TitleBottomText = styled.p`
  font-family: ${props => props.theme.fonts.mainFont};
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: ${props => props.theme.colors.secondaryTextColor};
  margin-bottom: 15px;
`;

export const TextPortions = styled.p`
  font-family: ${props => props.theme.fonts.mainFont};
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  color: #666666;
`;

export const TextGift = styled.p`
  width: 140px;
  font-family: ${props => props.theme.fonts.mainFont};
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  color: #666666;
`;

export const BottomText = styled.p`
  font-family: ${props => props.theme.fonts.mainFont};
  font-weight: 400;
  font-size: 13px;
  line-height: 1.15;
  text-align: center;
  color: ${({ balance, theme }) => {
    if (balance === 0) {
      return theme.colors.noneBalanceColor;
    }
    return theme.colors.primaryTextColor;
  }};
`;

export const Text = styled.p`
  font-family: ${props => props.theme.fonts.mainFont};
  font-weight: 400;
  font-size: 42px;
  line-height: 0.52;
  text-align: center;
  color: ${props => props.theme.colors.primaryTextColor};
  margin-bottom: 12px;
  & + p {
    font-family: ${props => props.theme.fonts.mainFont};
    font-weight: 400;
    font-size: 24px;
    line-height: 0.52;
    text-align: center;
    color: ${props => props.theme.colors.primaryTextColor};
  }
`;

export const Button = styled.button`
  display: inline-block;
  margin-left: 3px;
  padding: 0;
  font-style: inherit;
  background-color: transparent;
  border: transparent;
  border-bottom: ${props =>
    `1px dashed ${props.theme.colors.blueBackgroundColor}`};
  color: ${props => props.theme.colors.blueBackgroundColor};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.hoverBackgroundColor};
    border-bottom: ${props =>
      `1px dashed ${props.theme.colors.hoverBackgroundColor}`};
  }
`;
