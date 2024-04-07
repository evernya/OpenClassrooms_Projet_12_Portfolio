//CSS
import "../../style/style.css";



export default function Competence( {image, alt, title} ) {
    //affichage (render)
    return (
        <div className="competence__hover">
            <img src={image} alt={alt} />
            <div className="title">{title}</div>
        </div>
    );
}