import React from 'react';
import './Menu.css';
import pin from '../../assets/pin.svg';
import projectManagement from '../../assets/project-management.svg';
import clapperboard from '../../assets/clapperboard.svg';
import startup from '../../assets/startup.svg';
import heart from '../../assets/heart.svg';


const Menu = ({ updateCurrentNewsTopic }) => {
  return (
    <nav className='navigation'>
      <div onClick={() => updateCurrentNewsTopic('local')}>
        <img src={pin} alt='icon' />
        <p>Local News</p>
      </div>
      <div onClick={() => updateCurrentNewsTopic('technology')}>
        <img src={projectManagement} alt='icon' />
        <p>Technology</p>
      </div>
      <div onClick={() => updateCurrentNewsTopic('entertainment')}>
        <img src={clapperboard} alt='icon' />
        <p>Entertainment</p>
      </div>
      <div onClick={() => updateCurrentNewsTopic('science')}>
        <img src={startup} alt='icon' />
        <p>Science</p>
      </div>
      <div onClick={() => updateCurrentNewsTopic('health')}>
        <img src={heart} alt='icon' />
        <p>Health</p>
      </div>
    </nav>
  )
}

export default Menu;
