import styled from 'styled-components';

export const CardsListElement = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 40px;
    justify-content: center;
  }
  @media screen and (min-width: 1280px) {
    gap: 80px;
  }
`;
