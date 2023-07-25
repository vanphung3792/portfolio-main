import './Nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {LiaBuromobelexperte} from 'react-icons/lia';
import {MdWorkOutline} from 'react-icons/md';
import {BiMessageSquareDetail} from 'react-icons/bi';

import{useState} from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')

  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><LiaBuromobelexperte/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdWorkOutline/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}
export default Nav