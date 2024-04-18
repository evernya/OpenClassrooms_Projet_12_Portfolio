//IMPORT
import { NavLink } from 'react-router-dom';

//CSS
import "../../style/style.css";



export default function Navigation() {
    //comportement
    const handleNavigate = (elementId) => {
        //Recherche de l'élément dans le document avec l'ID spécifié
        const element = document.getElementById(elementId);

        if (element) {
            //Si l'élément existe défile jusqu'à cet élément
            element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };


    //affichage (render)
    return (
        <div className="nav-item__link--pf">
            <NavLink to="/" onClick={() => scrollToTop} className={({ isActive }) => `nav-item__link--pf-home ${isActive ? 'link--pf-home-active' : ''}`}>Accueil</NavLink>
            <NavLink to="/#PF" onClick={() => handleNavigate('PF')} className={({ isActive }) => `nav-item__link--pf-pf ${isActive ? 'link--pf-pf-active' : ''}`}>Portfolio</NavLink>
            <NavLink to="/about" onClick={() => scrollToTop} className={({ isActive }) => `nav-item__link--pf-about ${isActive ? 'link--pf-about-active' : ''}`}>À propos</NavLink>
            <NavLink to="/#contact" onClick={() => handleNavigate('contact')} className={({ isActive }) => `nav-item__link--pf-contact ${isActive ? 'link--pf-contact-active' : ''}`}>Contact</NavLink>
        </div>
    );
}