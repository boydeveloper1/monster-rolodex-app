import { Monster } from "../../App";

import Card from "../card/card.component";
import "./card-list.styles.css";

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => {
  return (
    // All the Monsters
    <div className="card-list">
      {monsters.map((monster) => {
        // Individual Monsters card
        return <Card key={monster.id} AllMonsters={monster} />;
      })}
    </div>
  );
};

export default CardList;
