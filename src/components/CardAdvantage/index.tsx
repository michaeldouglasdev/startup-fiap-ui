import React from 'react';
import { Container, CardAdvantageTitle, CardAdvantageDescription, CardAdvantageSeparator, CardAdvantagePrice, CardAdvantagePriceBox, CardAdvantageItens, CardAdvantageItem } from './styles';
import { VBox } from '../Position/styled';
import { AiOutlineCheck } from 'react-icons/ai';
import Button from '../Button';

interface CardAdvantageProps {
  title: string;
  description: string;
  price?: number;
  items: string[];
  onTap: () => void;
}

const CardAdvantage: React.FC<CardAdvantageProps> = ({ title, description, price, items, onTap }) => {

  return (
    <Container>
      <VBox alignItems="center">
        <CardAdvantageTitle>{title}</CardAdvantageTitle>
        <CardAdvantageDescription>{description}</CardAdvantageDescription>

        <CardAdvantageSeparator />

        <CardAdvantagePriceBox>
          <CardAdvantagePrice>{price}</CardAdvantagePrice>
        </CardAdvantagePriceBox>

        <CardAdvantageSeparator />

        {items && items.length > 0 &&
          <CardAdvantageItens>
            {items.map((item, index) => (
              <CardAdvantageItem key={index}>
                <AiOutlineCheck />
                {item}
              </CardAdvantageItem>
            ))}
          </CardAdvantageItens>
        }
      </VBox>


      <Button typeStyle="blue-clean" outline borderWidth={2} style={{ alignSelf: 'center' }}>Assinar Plano</Button>

    </Container>
  )
}

export default CardAdvantage;