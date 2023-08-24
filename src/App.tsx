import './App.css';
import { useState } from 'react';
import { Header } from './components/header/header';
import { Form } from './components/Form/form';
import { Button } from './components/RegisterButton/Button';

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleClickButton = () => {
    setMostrarFormulario(true);
  };
  const handleCancel = () => {
    setMostrarFormulario(false);
  };

  return (
    <div>
      {!mostrarFormulario ? (
        <Button onClick={ handleClickButton } />
      ) : (
        <Form onCancel={ handleCancel } />
      )}
      <Header />
    </div>
  );
}

export default App;
