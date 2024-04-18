//IMPORT
import { Link } from "react-router-dom";

function Error() {
    //state (état, données)
  
    //comportement
  
    //affichage (render)
    return (
        <main className="error"> 
             <h1>Désolé nous ne parvenons pas à retrouver cette page !</h1>
            <Link to={'/'} className="error__button">Retournez à la page d'accueil</Link>
        </main>
    );
  }
  
  export default Error;