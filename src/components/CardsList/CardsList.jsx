import { CardsItem } from 'components/CardsItem/CardsItem';
import cards from '../../data';
import { CardsListElement } from './CardsList.styled';

export const CardsList = () => {
  return (
    <CardsListElement>
      {cards.map(
        ({ composition, portions, gift, weight, id, balance, bottomText }) => {
          return (
            <CardsItem
              key={id}
              composition={composition}
              portions={portions}
              gift={gift}
              weight={weight}
              balance={balance}
              bottomText={bottomText}
            />
          );
        }
      )}
    </CardsListElement>
  );
};
