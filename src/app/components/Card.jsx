import './Card.scss'
const Card = (props) => {
    return(
        <div className="card">
            <div className="card__side card__side--front-1">
                {props.children}
            </div>
            <div className="card__side card__side--back card__side--back-1">
                <span className="headline">{props.headline}</span>
                <hr/>
                {props.content}
            </div>
      </div>
    );
}
export default Card;