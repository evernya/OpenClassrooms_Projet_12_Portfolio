//IMPORT
import { NavLink } from 'react-router-dom';

//CSS
import "../../style/style.css";



export default function Navigation() {
    //affichage (render)
    return (
        <div className="nav-item__link--pf">
            <NavLink to="/" className={({ isActive }) => `nav-item__link--pf-home ${isActive ? 'navlink-active' : ''}`}>Accueil</NavLink>
            <NavLink to="/#PF" className={({ isActive }) => `nav-item__link--pf-pf ${isActive ? 'navlink-active' : ''}`}>Portfolio</NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-item__link--pf-about ${isActive ? 'navlink-active' : ''}`}>À propos</NavLink>
            <NavLink to="/#contact" className={({ isActive }) => `nav-item__link--pf-contact ${isActive ? 'navlink-active' : ''}`}>Contact</NavLink>
        </div>
    );
}