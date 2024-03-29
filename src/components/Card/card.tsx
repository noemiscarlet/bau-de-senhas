type CardType = {
  nameServ: string;
  login: string;
  password: string;
  url: string;
};
type DeleteCardType = (obj: CardType) => void;

type CardProps = {
  obj: CardType;
  deleteCard: DeleteCardType;
  toggle: boolean
};

export function Card({ obj, deleteCard, toggle }: CardProps) {
  const handleDeleteClick = () => {
    deleteCard(obj);
  };

  return (
    <div>
      <h2>
        <a href={ obj.url }>
          {obj.nameServ}
        </a>
      </h2>
      <p>
        {obj.login}
      </p>
      <p>
        { toggle ? '******' : obj.password }
      </p>
      <button
        onClick={ handleDeleteClick }
        data-testid="remove-btn"
      >
        Apagar
      </button>
    </div>
  );
}
