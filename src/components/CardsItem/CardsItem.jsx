import PropTypes from 'prop-types';
import { useState } from 'react';
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
  Button,
  ContainerNoActive,
} from './CardsItem.styled';

export const CardsItem = ({
  composition,
  portions,
  gift,
  weight,
  balance,
  bottomText,
}) => {
  const [selected, setSelected] = useState(false);
  const toggleCard = () => {
    setSelected(prevState => !prevState);
  };

  return (
    <CardsItemElem>
      <ContainerNoActive balance={balance}></ContainerNoActive>
      <CardContainer balance={balance} onClick={toggleCard} value={selected}>
        <Card>
          <CardTop>
            <TitleTopText>Сказочное заморское яство</TitleTopText>
            <TitleCard>Нямушка</TitleCard>
            <TitleBottomText>c {composition}</TitleBottomText>
            <TextPortions>{portions} порций</TextPortions>
            <TextGift>{gift}</TextGift>
          </CardTop>
          <ContentContainer balance={balance} value={selected}>
            <Text>{weight}</Text>
            <p>кг</p>
          </ContentContainer>
        </Card>
      </CardContainer>

      <BottomText balance={balance}>
        {balance > 0 && selected && bottomText}
        {balance > 0 && !selected && (
          <>
            Чего сидишь? Порадуй котэ,
            <Button type="button" onClick={toggleCard}>
              купи.
            </Button>
          </>
        )}
        {balance === 0 && `Печалька, с ${composition} закончился.`}
      </BottomText>
    </CardsItemElem>
  );
};

CardsItem.propTypes = {
  composition: PropTypes.string.isRequired,
  portions: PropTypes.number.isRequired,
  gift: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  bottomText: PropTypes.string.isRequired,
};
