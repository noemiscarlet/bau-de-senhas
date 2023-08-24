type FormProps = {
  onCancel: () => void;
};

export function Form({ onCancel }: FormProps) {
  return (
    <form onSubmit={ (e) => e.preventDefault() }>
      <label htmlFor="nameServ">Nome do serviço</label>
      <input type="text" id="nameServ" />
      <label htmlFor="login">Login</label>
      <input type="text" id="login" />
      <label htmlFor="password">Senha</label>
      <input type="password" id="password" />
      <label htmlFor="url">URL</label>
      <input type="text" id="url" />
      <button>
        Cadastrar
      </button>
      <button onClick={ onCancel }>Cancelar</button>
    </form>
  );
}
