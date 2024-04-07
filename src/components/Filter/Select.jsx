//IMPORT
import { useState } from 'react';

//COMPONENT
import Gallery from './Gallery';

//DATA
import dataPortfolio from '../../data/projets.json';

//CSS
import "../../style/style.css";



export default function Select() {
  const [selectedCategory, setSelectedCategory] = useState('Tout');

  const handleChangeCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='select'>
      <div className='select__container'>
        <button onClick={() => handleChangeCategory('Tout')} className={`select__container--btn select__container--btn-t ${selectedCategory === 'Tout' ? 'btn-t-active' : ''}`}>Tout</button>
        <button onClick={() => handleChangeCategory('Édition')} className={`select__container--btn select__container--btn-edi ${selectedCategory === 'Édition' ? 'btn-edi-active' : ''}`}>Édition</button>
        <button onClick={() => handleChangeCategory('Illustration')} className={`select__container--btn select__container--btn-illu ${selectedCategory === 'Illustration' ? 'btn-illu-active' : ''}`}>Illustration</button>
        <button onClick={() => handleChangeCategory('Photo')} className={`select__container--btn select__container--btn-photo ${selectedCategory === 'Photo' ? 'btn-photo-active' : ''}`}>Photo</button>
        <button onClick={() => handleChangeCategory('Perso')} className={`select__container--btn select__container--btn-perso ${selectedCategory === 'Perso' ? 'btn-perso-active' : ''}`}>Perso</button>

      </div>
      <Gallery filteredProject={dataPortfolio.projets.filter(projet => selectedCategory === 'Tout' ? true : projet.category.includes(selectedCategory))} />
    </div>
  );
}