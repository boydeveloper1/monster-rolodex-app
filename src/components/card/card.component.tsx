import { Monster } from "../../App";

type CardProps = {
  AllMonsters: Monster;
};

import "./card.styles.css";

const Card = ({ AllMonsters }: CardProps) => {
  const { id, name, email } = AllMonsters;

  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
