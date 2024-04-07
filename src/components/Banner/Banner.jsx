//CSS
import "../../style/style.css";

export default function Banner({ bannerImage, bannerAlt, bannerClass }) {
    //affichage (render)
    return (
        <div className="banner">
            <img src={bannerImage} alt={bannerAlt} className={bannerClass} />
        </div>
    );
}