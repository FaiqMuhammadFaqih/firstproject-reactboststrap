import Carousel from 'react-bootstrap/Carousel';
import Hero1 from './../Assets/hero5.png'
import Hero2 from './../Assets/hero2.png'
import Hero3 from './../Assets/hero1.png'
import Hero4 from './../Assets/hero4.png'


const Hero = () => {
    return(
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Hero1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Mekanik</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Hero2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Sains</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Hero3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Ekonomi</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Hero4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Computer</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}

export default Hero;