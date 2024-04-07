//IMPORT
import { Link } from 'react-router-dom';

//COMPONENT
import Card from './Card';

//CSS
import "../../style/style.css";



export default function Gallery({filteredProject}) {
  //affichage (render)
  return (
    <div className='gallery'>
      {filteredProject.map((project) => (
          <figure key={project} className='gallery__container'>
            <Link to={`/projet/${project.id}/${project.title}`}>
              <Card cover={project.cover} alt={project.alt} title={project.title} />
            </Link>
          </figure>
      ))}
    </div >
  );
}