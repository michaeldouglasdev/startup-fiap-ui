import React from 'react';
import { Container, Description } from './styles';
import { GoLocation } from 'react-icons/go';

interface LocationProps {
  city: string;
  state: string;
}
const Location: React.FC<LocationProps> = ({ city, state }) => (
  <Container>
    <GoLocation style={{ marginTop: 2 }} />
    <Description>
      {city} - {state}
    </Description>
  </Container>
);

export default Location;