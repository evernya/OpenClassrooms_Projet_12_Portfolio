//CSS
import "../../style/style.css";



export default function Card({ cover, alt, title }) {
    //affichage (render)
    return (
        <div className='card__containt'>
            <img src={cover} alt={alt} />
            <div className="card__containt--hover">{title}</div>
        </div >
    );
}