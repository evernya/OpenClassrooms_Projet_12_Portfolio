//CSS
import "../../style/style.css";



export default function Form() {
    //affichage (render)
    return (
        <div className="contact__form">
            <h3>Me laissez un message ?</h3>
            <form action="" className="contact__form--container">
                <input type="text" id="name" placeholder="Nom - Prénom" />
                <input type="email" id="email" placeholder="Adresse email" />
                <textarea id="message" name="Message" cols="30" rows="10" placeholder="Entrez votre message"></textarea>
                <input type="submit" id="submit" placeholder="SUBMIT" />
            </form>
        </div>
    );
}