import { useState } from "react";
import { RiDeleteBin2Fill, RiEditFill } from "react-icons/ri"
import { Container, Context, TemperaturaCard } from './styles';

interface CardProps {
  id: string,
  name: String,
  temperatura: number,
  openModal: (id: string) => void,
  removeCard: (id: string) => void,
}

export function Card ({ id, temperatura, openModal, name, removeCard }: CardProps) {
  const [cencius, setCencius] = useState(true)

  return (
    <Container
      perspective={0}
    >
      <div className='icons'>
        <RiEditFill color="#fff" onClick={() => {
          openModal(id)
        }} />

        <RiDeleteBin2Fill color="#fff" onClick={() => {
          removeCard(id)
        }} />
      </div>
      <TemperaturaCard>

        <p>{cencius ? Number(temperatura).toFixed(2) : Number((temperatura * 9 / 5) + 32).toFixed(1)}°</p>
        <div>
          <p onClick={() => { setCencius(true) }}>C</p>
          <p onClick={() => { setCencius(false) }}>F</p>
        </div>
      </TemperaturaCard>
      <Context>
        <p>{name}</p>
      </Context>
    </Container>
  );
}

