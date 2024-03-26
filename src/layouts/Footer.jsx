//IMPORT
import { Link } from "react-router-dom";

//COMPONENT
import Liens from "../components/Navigation/Liens";

//CSS
import "../style/style.css";



export default function Footer() {
    //affichage (render)
    return (
        <footer>
            <nav className="footer-nav-box">
                <Liens />

                <div className="footer-nav-box__info">
                    <div className="footer-nav-box__info--follow">
                        <h5>Me suivre</h5>
                        <Link to="https://www.instagram.com/e.chungyouchong/" target="blank" className="footer-nav-box__info--follow-link">Instagram</Link>
                        <Link to="https://www.linkedin.com/in/emmanuelle-chung-you-chong-429a9b174/" target="blank" className="footer-nav-box__info--follow-link">Linkedin</Link>
                    </div>

                    <div className="footer-nav-box__info--follow">
                        <h5>Contact</h5>
                        <span>emmanuelle.cyc@live.fr</span>
                        <span>07 68 30 93 81</span>
                    </div>
                </div>
            </nav>

            <p>©2024 Portfolio de Emmanuelle CHUNG YOU CHONG —
                <Link to={'/mentions'} target="blank" className="footer-link"> Mentions légales</Link> —
                <Link to={'/'} target="blank" className="footer-link"> RGPD</Link>
            </p>
        </footer>
    );
}