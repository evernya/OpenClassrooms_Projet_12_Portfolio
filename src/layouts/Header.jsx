//IMPORT
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//COMPONENTS

//ASSETS
import logo from "../assets/Logo_sansfond.png"

//ICON
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

//CSS
import "../style/style.css";



export default function Header() {
    //affichage (render)
    return (
        <header>
            <nav className="nav-box">
                <Link to={'/'} id="logo"><img src={logo} alt="Logotype Emmanuelle CHUNG YOU CHONG" /></Link>

                <div className="nav-item">
                    <div className="nav-item__link--pf">
                        <Link to={'/'} className="nav-item__link--pf-home">Accueil</Link>
                        <Link to={'/#PF'} className="nav-item__link--pf-pf">Portfolio</Link>
                        <Link to={'/about'} className="nav-item__link--pf-about">À propos</Link>
                        <Link to={'/#contact'}className="nav-item__link--pf-contact">Contact</Link>
                    </div>

                    <div className="nav-item__link--rs">
                        <Link to="https://www.instagram.com/e.chungyouchong/" target="blank">
                            <div className="nav-item__link--rs-icone nav-item__link--rs-icone-insta"><FontAwesomeIcon icon={faInstagram} /></div>
                        </Link>
                        <Link to="https://www.linkedin.com/in/emmanuelle-chung-you-chong-429a9b174/" target="blank">
                            <div className="nav-item__link--rs-icone nav-item__link--rs-icone-linkedin"><FontAwesomeIcon icon={faLinkedin} /></div>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}