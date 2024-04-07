//ASSETS
import rectangle from "../../assets/barre_logo.svg"
import rond from "../../assets/ellipse_logo.svg"
import carre from "../../assets/rec_logo.svg"
import ellipse from "../../assets/ellipse-vide_logo.svg"

//CSS
import "../../style/style.css";



export default function Banner() {
    //affichage (render)
    return (
        <div className="banner-home">
            <img src={rectangle} alt="Rectangle du logotype E" className="banner-home--rectangle" />
            <div className="banner-home__geo">
                <div className="banner-home__geo--single">
                    <img src={rond} alt="Rond du logotype E" className="banner-home__geo--single--img" />
                    <div className="banner-home__geo--single--p">Emmanuelle</div>
                </div>
                <div className="banner-home__geo--single">
                    <img src={carre} alt="Carré du logotype E" className="banner-home__geo--single--img" />
                    <div className="banner-home__geo--single--p">CHUNG YOU CHONG</div>
                </div>
                <div className="banner-home__geo--single">
                    <img src={ellipse} alt="Cercle du logotype E" className="banner-home__geo--single--img" />
                    <div className="banner-home__geo--single--p">Graphiste / Webdesigner</div>
                </div>
            </div>
        </div>
    );
}