import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.css";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block height w-100"
          src="../homeWeatherPics/cloudySunHills.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Sunny Mountain</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block height w-100"
          src="homeWeatherPics/orangeClouds.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Oragne Clouds</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block height w-100"
          src="homeWeatherPics/sunnyWater.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Sunny Lake</h3>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
