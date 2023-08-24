type CardType = {
  nameServ: string;
  login: string;
  password: string;
  url: string;
};

export function Card({ obj }: { obj: CardType }) {
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
        {obj.password}
      </p>
    </div>
  );
}
