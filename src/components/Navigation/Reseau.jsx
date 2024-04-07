//IMPORT
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//ICON
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

//CSS
import "../../style/style.css";



export default function Reseau() {
    //affichage (render)
    return (
        <div className="nav-item__link--rs">
            <Link to="https://www.instagram.com/e.chungyouchong/" target="blank">
                <div className="nav-item__link--rs-icone nav-item__link--rs-icone-insta nav-insta"><FontAwesomeIcon icon={faInstagram} /></div>
            </Link>
            <Link to="https://www.linkedin.com/in/emmanuelle-chung-you-chong-429a9b174/" target="blank">
                <div className="nav-item__link--rs-icone nav-item__link--rs-icone-linkedin nav-linkedin"><FontAwesomeIcon icon={faLinkedin} /></div>
            </Link>
        </div>
    );
}