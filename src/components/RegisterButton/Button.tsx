import React, { MouseEventHandler } from 'react';

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export function Button({ onClick }: ButtonProps) {
  return <button onClick={ onClick }>Cadastrar nova senha</button>;
}
