import React from 'react';
import './Menu.css';
import local from '../../assets/pin.svg';
import technology from '../../assets/project-management.svg';
import entertainment from '../../assets/clapperboard.svg';
import science from '../../assets/startup.svg';
import health from '../../assets/heart.svg';

const Menu = ({ updateCurrentNewsTopic }) => {
    const icons = [
      {
        img: local,
        name: 'local'
      },
      {
        img: technology,
        name: 'technology'
      },
      {
        img: entertainment,
        name: 'entertainment'
      },
      {
        img: science,
        name: 'science'
      },
      {
        img: health,
        name: 'health'
      },

    ]

  return (
    <nav className='navigation'>
      {icons.map(icon => (
        <div onClick={() => updateCurrentNewsTopic(`${icon.name}`)}>
          <img src={icon.img} alt={icon.name} />
          <p>{icon.name}</p>
        </div>
      ))}
    </nav>
  )
}

export default Menu;
