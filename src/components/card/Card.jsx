import { Link } from 'react-router-dom';
import './card.scss';

function Card({ item }) {
    return (
       <div className="card">
            <Link to={`/${item.id}`} className='imageContainer'>
                <img src={item.img} alt="img" />
            </Link>
            <div className='textContainer'>
                <h2 className='title'>

                </h2>
            </div>
        </div> 
    );
}

export default Card;