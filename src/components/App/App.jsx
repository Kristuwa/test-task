import { CardsList } from 'components/CardsList/CardsList';
import { Container, Section, Title } from './App.styled';

export const App = () => {
  return (
    <Section>
      <Container>
        <Title>Ты сегодня покормил кота?</Title>
        <CardsList />
      </Container>
    </Section>
  );
};
