import styled from 'styled-components';
import bgImg from '../../img/Pattern.png';
import bgImgBig from '../../img/Pattern@2x.png';

export const Section = styled.section`
  background-image: url(${bgImg});
  background-position: center;
  background-repeat: repeat;
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgImgBig});
  }
`;
export const Container = styled.div`
  width: 100%x;
  min-width: 320px;
  margin: 0 auto;

  width: 320px;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    padding-left: 15px;
    padding-right: 15px;
  }

  @media screen and (min-width: 375px) {
    width: 350px;
  }

  @media screen and (min-width: 768px) {
    padding: 36px 15px 67px;
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    max-width: 1280px;
    padding: 36px 80px 67px;
  }
`;

export const Title = styled.h1`
  font-family: 'Exo2.0';
  text-shadow: 0px 1px 1px #000000;
  font-size: 36px;
  line-height: 1.22;
  text-align: center;
  margin-bottom: 24px;
`;
