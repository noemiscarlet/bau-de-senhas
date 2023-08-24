import { useEffect, useState } from 'react';

type PasswordType = {
  password: string
};
const regexLetterNumbers = /^(?=.*[a-zA-Z])(?=.*\d).*$/;
const regexEspecial = /[@$!%*?&]/;
const valid = 'valid-password-check';
const invalid = 'invalid-password-check';

export function Display({ password }: PasswordType) {
  const [minCaracters, setMinCaracters] = useState(false);
  const [maxCaracters, setMaxCharacters] = useState(false);
  const [lettersNumbers, setLettersNumbers] = useState(false);
  const [especialCaracter, setEspecialCharacter] = useState(false);

  useEffect(() => {
    // Validação do número mínimo de caracteres
    if (password.length >= 8) {
      setMinCaracters(true);
    } else {
      setMinCaracters(false);
    }

    // Validação do número máximo de caracteres
    if (password.length >= 8 && password.length <= 16) {
      setMaxCharacters(true);
    } else {
      setMaxCharacters(false);
    }

    if (regexLetterNumbers.test(password)) {
      setLettersNumbers(true);
    } else {
      setLettersNumbers(false);
    }

    if (regexEspecial.test(password)) {
      setEspecialCharacter(true);
    } else {
      setEspecialCharacter(false);
    }
  }, [password]);

  return (
    <div>
      <p
        className={
         minCaracters ? valid : invalid
         }
      >
        Possuir 8 ou mais caracteres
      </p>
      <p
        className={
         maxCaracters ? valid : invalid
         }
      >
        Possuir até 16 caracteres
      </p>
      <p
        className={
         lettersNumbers ? valid : invalid
         }
      >
        Possuir letras e números
      </p>
      <p
        className={
         especialCaracter ? valid : invalid
         }
      >
        Possuir algum caractere especial
      </p>
    </div>
  );
}
