import './App.css';
import { useState } from 'react';
import { Header } from './components/header/header';
import { Form } from './components/Form/form';
import { Button } from './components/RegisterButton/Button';
import { Card } from './components/Card/card';

type CardType = {
  nameServ: string;
  login: string;
  password: string;
  url: string;
};

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [cards, setCards] = useState<CardType[]>([]);

  const handleClickButton = () => {
    setMostrarFormulario(true);
  };
  const handleCancel = () => {
    setMostrarFormulario(false);
  };

  const pushCard = (obj: CardType) => {
    setCards((prevCards) => [...prevCards, obj]);
    setMostrarFormulario(false);
  };

  return (
    <div>
      <Header />
      {!mostrarFormulario ? (
        <Button onClick={ handleClickButton } />
      ) : (
        <Form onCancel={ handleCancel } pushCard={ pushCard } />
      )}
      {
      cards.length === 0 ? (
        <h2>Nenhum cartão disponível.</h2>
      ) : (
        cards.map((card, key) => (
          <Card
            obj={ card }
            key={ key }
          />
        ))
      )
    }
    </div>
  );
}

export default App;
