//COMPONENTS
import Banner from "../../components/Banner/Banner";
import Competence from "../../components/Competences/Competence";

//DATA
import competencesData from "../../data/competences.json";

//ASSETS
import bannerAbout from "../../assets/Banner_about.webp";
import career from "../../assets/A-propos_parcours.webp";

//CSS
import "../../style/style.css";



function About() {
    //affichage (render)
    return (
        <main className="about">
            <section className="about__section">
                <Banner bannerImage={bannerAbout} bannerAlt={"Bannière de la page à propos"} bannerClass={"banner__img banner__img--about"} />

                <div className="about__section--margin-intro about__section--header-intro">
                    <h2>Emmanuelle CHUNG YOU CHONG</h2>
                    <span>pour vous servir !</span>
                    <p>“Diplômée d'un BAC Série Technologique Design Art Appliqué puis suivi d'un BTS Communication, je suis
                        passionnée d'art graphique. J'ai donc décidé d'en faire mon métier !
                        <br /><br />
                        Mon parcours a été un travail constructif révélant mes différentes qualités, affections ainsi que mes
                        points faibles. Néanmoins toucher à tout m'a permis de m'épanouir et de développer mes capacités.
                        <br /><br />
                        Aujourd'hui encore, je continue d'apprendre et grandir.”
                    </p>
                </div>
            </section>

            <section className="about__section--margin-comp about__section--competence">
                <h3>Compétences</h3>

                <div className="about__section--competence__icone" id="icone-competence">
                    {competencesData.competences.map((competence, index) => (
                        <Competence key={index} image={competence.image} alt={competence.alt} title={competence.title} />
                    ))}
                </div>
            </section>

            <section className="about__section--margin-comp">
                <h3>Expériences</h3>

               <img src={career} alt="Parcours scolaire" className="image-parcours" />
            </section>
        </main>
    );
}

export default About;