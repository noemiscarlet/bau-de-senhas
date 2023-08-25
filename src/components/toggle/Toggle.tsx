type HandleToggleTyṕe = {
  handleToggle: () => void
};

export function Toggle({ handleToggle }: HandleToggleTyṕe) {
  return (
    <div>
      <label htmlFor="toggle">Esconder senhas</label>
      <input
        type="checkbox"
        id="toggle"
        onChange={ handleToggle }
      />
    </div>

  );
}
