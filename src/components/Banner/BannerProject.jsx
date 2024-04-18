//ASSETS
import bannerProject from "../../assets/Banner_projet.webp";

//CSS
import "../../style/style.css";



export default function BannerProject() {
    //affichage (render)
    return (
        <div className="banner">
            <img src={bannerProject} alt="Bannière de la page projet" className="banner-project__img" />
        </div>
    );
}