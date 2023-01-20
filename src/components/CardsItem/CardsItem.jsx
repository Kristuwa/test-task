import PropTypes from 'prop-types';
import {
  CardsItemElem,
  Card,
  TitleTopText,
  TitleCard,
  TitleBottomText,
  TextPortions,
  BottomText,
  TextGift,
  CardTop,
  ContentContainer,
  Text,
  CardContainer,
} from './CardsItem.styled';
// import { NavLink } from 'react-router-dom';

export const CardsItem = ({ composition, portions, gift, weight }) => {
  return (
    <CardsItemElem>
      <CardContainer>
        <Card>
          <CardTop>
            <TitleTopText>Сказочное заморское яство</TitleTopText>
            <TitleCard>Нямушка</TitleCard>
            <TitleBottomText>c {composition}</TitleBottomText>
            <TextPortions>{portions} порций</TextPortions>
            <TextGift>{gift}</TextGift>
          </CardTop>
          <ContentContainer>
            <Text>{weight}</Text>
            <p>кг</p>
          </ContentContainer>
        </Card>
      </CardContainer>

      <BottomText>Чего сидишь? Порадуй котэ, купи.</BottomText>
    </CardsItemElem>
  );
};

CardsItem.propTypes = {
  composition: PropTypes.string.isRequired,
  portions: PropTypes.number.isRequired,
  gift: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
};
