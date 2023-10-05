import './Portfolio.css';
import gymTypeScript from '../../assets/gym-typescript.png';

const data = [
  {
    id: 1,
    image: gymTypeScript,
    title: 'Gym-TypeScript',
    github: "https://github.com/vanphung3792/gym-typescript",
    demo: "https://vanphung3792.github.io/gym-typescript/"
  },
 
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>        
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}
export default Portfolio