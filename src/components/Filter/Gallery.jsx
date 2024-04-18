//IMPORT
import { Link } from 'react-router-dom';

//COMPONENT
import Card from './Card';

//CSS
import "../../style/style.css";



export default function Gallery({filteredProject}) {
  //comportement
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  //affichage (render)
  return (
    <div className='gallery'>
      {filteredProject.map((project, i) => (
          <figure key={i} className='gallery__container'>
            <Link onClick={scrollToTop} to={`/projet/${project.id}`}>
              <Card cover={project.cover} alt={project.alt} title={project.title} />
            </Link>
          </figure>
      ))}
    </div >
  );
}