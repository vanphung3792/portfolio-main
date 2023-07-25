import './Footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#footer" className='footer__logo'>VAN PHUNG</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/ph%C3%B9ng-v%C3%A2n-665434120/" target="blank"><BsLinkedin/></a>
        <a href="https://github.com/" target="blank"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Van Phung. All rights reserved.</small>
      </div>
    </footer>
  )
}
export default Footer