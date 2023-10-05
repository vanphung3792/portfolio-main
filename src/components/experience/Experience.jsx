import './Experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const frontEndExp = ["HTML", "CSS", "Javascipt", "Bootstrap", "ReactJS", "Tailwind", "TypeScript", "Vite", "Git"];
const backEndExp = ["PHP", "MySQL", "Laravel"];

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontEndExp.map((item) => (<article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>{item}</h4>
            </article>))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
          {backEndExp.map((item) => (<article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>{item}</h4>
            </article>))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experience