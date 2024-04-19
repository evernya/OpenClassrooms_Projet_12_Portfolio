//IMPORT
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//ICON
import { faLink } from '@fortawesome/free-solid-svg-icons';

//COMPONENTS
import Banner from "../../components/Banner/Banner";

//ASSETS
import bannerProject from "../../assets/Banner_projet.webp";

//DATA
import dataProjets from "../../data/projets.json";

//CSS
import "../../style/style.css";



function Projet() {
    //state (état, données)
    const { projetId } = useParams();
    const navigate = useNavigate();

    const [project, setProject] = useState(
        {
            title: '',
            image: '',
            description: { title: "", introduction: "", apropos: ""},
            competences: [],
            pictures: [],
            lien : {title: "", url: ""},
        }
    );

    //comportement
    useEffect(() => {
        const ficheProject = dataProjets.projets.find((project) => project.id === projetId);

        if (ficheProject) {
            setProject(ficheProject)
        } else {
            return navigate('/*')
        }
    }, [navigate, projetId]);

    //Espace dans "à propos"
    const paragraph = project.description.apropos.split('\n').map((paragraph, indexParagraph) => (
        <p key={indexParagraph}>{paragraph}</p>
    ));

    //Compétence
    const competence = project.competences.map((competence, indexCompetence) => (
        <img key={indexCompetence} src={competence} alt="Les compétences utilisées pour le projet" className="project__header--text-competence--image"  />
    ));

    //affichage (render)
    return (
        <main className="project">
            <Banner bannerImage={bannerProject} bannerAlt={"Bannière de la page projet"} bannerClass={"banner-project__img"} />

            <section className="project__header">
                <div className="project__header--text">
                    <div className="project__header--text-titre">
                        <div className="project__header--text-barre"></div>
                        <h2>{project.title}</h2>
                    </div>

                    <div className="project__header--text-description">
                        <p>{project.description.introduction}</p>
                        <span>{project.description.title}</span>
                        <div className="project__header--text-description--paragraph">{paragraph}</div>
                    </div>

                    <div className="project__header--text-competence">
                        <span>Compétences</span>
                        <div className="project__header--text-competence--container">{competence}</div>
                    </div>

                    <div className="project__header--text-link">
                        <span>{project.lien.title}</span>
                        <Link to={project.lien.url} target="blank"><FontAwesomeIcon icon={faLink} className="icone-link"/></Link>
                    </div>
                </div>

                <div className="project__header--img">
                    <img src={project.image} alt={project.alt} />
                </div>
            </section>

            <section className="project__main">
                <img src={project.pictures[0]} alt={project.alt} />
            </section>

            <section className="project__color">
                <img src={project.pictures[1]} alt={project.alt} />
            </section>
        </main>
    );
}

export default Projet;