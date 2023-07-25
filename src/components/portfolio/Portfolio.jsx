import './Portfolio.css';
import img1 from '../../assets/item1.jpg';
import img2 from '../../assets/item2.jpg';
import img3 from '../../assets/item3.jpg';

const data = [
  {
    id: 1,
    image: img1,
    title: 'Title 1',
    github: "http://github.com",
    demo: "http://github.com"
  },
  {
    id: 2,
    image: img2,
    title: 'Title 2',
    github: "http://github.com",
    demo: "http://github.com"
  },
  {
    id: 3,
    image: img3,
    title: 'Title 3',
    github: "http://github.com",
    demo: "http://github.com"
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