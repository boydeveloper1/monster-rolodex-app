import Card from "../card/card.component";
import "./card-list.styles.css";


const CardList = ({ monsters }) => {
    return (
        // All the Monsters 
        <div className="card-list">
            {monsters.map(monster => {

                // Individual Monsters card 
                return <Card AllMonsters={monster} />
            })}
        </div>
    )

}

export default CardList;