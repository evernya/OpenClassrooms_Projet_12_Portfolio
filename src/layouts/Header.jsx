//IMPORT
import { Link } from "react-router-dom";

//COMPONENT
import Liens from "../components/Navigation/Liens";
import Reseau from "../components/Navigation/Reseau";

//ASSETS
import logo from "../assets/Logotype_ECYC.webp"

//CSS
import "../style/style.css";



export default function Header() {
    //affichage (render)
    return (
        <header>
            <nav className="header-nav-box">
                <Link to={'/'} id="logo"><img src={logo} alt="Logotype Emmanuelle CHUNG YOU CHONG" /></Link>

                <div className="nav-item">
                    <Liens />
                    <Reseau />
                </div>
            </nav>
        </header>
    );
}