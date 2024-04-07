//IMPORT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

//ICON
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

//ICON
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

//CSS
import "../../style/style.css";



export default function Information() {
    //affichage (render)
    return (
        <div className="contact contact__info-res">
            <h3>Informations</h3>
            <div className="contact__info-res__container info">
                <div className="contact__info-res__container--info"><FontAwesomeIcon icon={faEnvelope} className="contact__info-res__container--info--icone" /><p>emmanuelle.cyc@live.fr</p></div>
                <div className="contact__info-res__container--info"><FontAwesomeIcon icon={faMobileScreenButton} className="contact__info-res__container--info--icone" /><p>07 68 30 93 81</p></div>
                <div className="contact__info-res__container--info"><FontAwesomeIcon icon={faLocationDot} className="contact__info-res__container--info--icone" /><p>Bordeaux</p></div>
            </div>
            <h3>Réseaux</h3>
            <div className="contact__info-res__container res">
                <Link to="https://www.instagram.com/e.chungyouchong/" target="blank">
                    <div className="contact__info-res__container--res contact__info-res__container--res-insta res-insta"><FontAwesomeIcon icon={faInstagram} /></div>
                </Link>
                <Link to="https://www.linkedin.com/in/emmanuelle-chung-you-chong-429a9b174/" target="blank">
                    <div className="contact__info-res__container--res contact__info-res__container--res-linkedin res-linkedin"><FontAwesomeIcon icon={faLinkedin} /></div>
                </Link>
            </div>
        </div>
    );
}