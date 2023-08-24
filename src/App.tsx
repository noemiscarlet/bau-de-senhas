import './App.css';
import { useState } from 'react';
import { Header } from './components/header/header';
import { Form } from './components/Form/form';
import { Button } from './components/RegisterButton/Button';
import { Card } from './components/Card/card';

type Card = {
  nameServ: string;
  login: string;
  password: string;
  url: string;
};

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [cards, setCards] = useState<Card[]>([]);

  const handleClickButton = () => {
    setMostrarFormulario(true);
  };
  const handleCancel = () => {
    setMostrarFormulario(false);
  };

  const pushCard = (obj: Card) => {
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
        <h1>Nenhum cartão disponível.</h1>
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
