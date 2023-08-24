import { useEffect, useState } from 'react';
import { validation } from '../validation/password';
import { Display } from '../Display/display';

type FormProps = {
  onCancel: () => void;
};

export function Form({ onCancel }: FormProps) {
  const [nameServ, setNameServ] = useState(false);
  const [login, setLogin] = useState(false);
  const [password, setPassword] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  const [passwordState, setPasswordState] = useState('');

  function verification(event: React.ChangeEvent<HTMLInputElement>) {
    const { target } = event;
    const { name, value } = target;

    if (value) {
      return name === 'nameServ' ? setNameServ(true) : setLogin(true);
    }
    return name === 'nameServ' ? setNameServ(false) : setLogin(false);
  }
  function verificationPass(event: React.ChangeEvent<HTMLInputElement>) {
    const { target } = event;
    const { value } = target;
    setPasswordState(value);
    if (value && validation(value)) {
      return setPassword(true);
    } return setPassword(false);
  }
  useEffect(() => {
    if (nameServ && login && password) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  }, [nameServ, login, password]);

  return (
    <>
      <form onSubmit={ (e) => e.preventDefault() }>
        <label htmlFor="nameServ">Nome do serviço</label>
        <input type="text" name="nameServ" id="nameServ" onChange={ verification } />
        <label htmlFor="login">Login</label>
        <input type="text" name="login" id="login" onChange={ verification } />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          onChange={ verificationPass }
          id="password"
        />
        <label htmlFor="url">URL</label>
        <input type="text" id="url" />
        <button disabled={ !activeButton }>Cadastrar </button>
        <button onClick={ onCancel }>Cancelar</button>
      </form>
      <Display password={ passwordState } />

    </>
  );
}
