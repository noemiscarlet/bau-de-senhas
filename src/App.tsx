import './App.css';
import { useState } from 'react';
import { Header } from './components/header/header';
import { Form } from './components/Form/form';
import { Button } from './components/RegisterButton/Button';
import { Card } from './components/Card/card';
import { Toggle } from './components/toggle/Toggle';

type CardType = {
  nameServ: string;
  login: string;
  password: string;
  url: string;
};

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [toggle, setToggle] = useState(false);
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
  const deleteCard = (obj: CardType) => {
    const deleteCardList = cards
      .filter(({ nameServ }) => obj.nameServ !== nameServ);
    setCards(deleteCardList);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <Header />
      {!mostrarFormulario ? (
        <Button onClick={ handleClickButton } />
      ) : (
        <Form onCancel={ handleCancel } pushCard={ pushCard } />
      )}
      <Toggle handleToggle={ handleToggle } />
      {
      cards.length === 0 ? (
        <h2>Nenhuma senha cadastrada</h2>
      ) : (
        cards.map((card, key) => (
          <Card
            toggle={ toggle }
            deleteCard={ deleteCard }
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
