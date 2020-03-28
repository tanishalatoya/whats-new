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
        name: 'local',
        id: 1
      },
      {
        img: technology,
        name: 'technology',
        id: 2
      },
      {
        img: entertainment,
        name: 'entertainment',
        id: 3
      },
      {
        img: science,
        name: 'science',
        id: 4
      },
      {
        img: health,
        name: 'health',
        id: 5
      }
    ]

  return (
    <nav className='navigation'>
      {icons.map(icon => (
        <button key={icon.id} className='menu-button' onClick={() => updateCurrentNewsTopic(`${icon.name}`)}>
          <img src={icon.img} alt={icon.name} />
          <p>{icon.name}</p>
        </button>
      ))}
    </nav>
  )
}

export default Menu;
