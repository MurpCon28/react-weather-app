import { Container, Row } from 'react-bootstrap';

import Search from '../components/search/Search';
import CurrentWeather from '../components/current-weather/Current-Weather';
import Forecast from '../components/forecast/forecast';
import Carousel from '../components/Carousel';
import { WEATHER_API_KEY, WEATHER_API_URL } from '../api';
import { useState } from 'react';

import "./Home.css";

const Home = () => {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherRepsonse = await response[0].json();
        const forecastRepsonse = await response[1].json();

        setCurrentWeather({city: searchData.label, ...weatherRepsonse});
        setForecast({city: searchData.label, ...forecastRepsonse});
      })
      .catch((err) => console.log(err));
  }

  console.log(currentWeather);
  console.log(forecast);

  return (
    <Container fluid="md">
      <br />
        <h4 className='homeWelcome'>Welcome to this Weather App</h4>
        <p className='appDetails'>Please search for a city to see the current weather and the forecast of the weather for the next week. By click the forecast card, it is 
        expanded to show more details about the forecast. You can also see in the emergancies sections advice on what to do incase of a weather storm/emergency.</p>
      <br />
      <Row>
        <Carousel/>
      </Row>
      <br />
      <Row>
        <Search onSearchChange={handleOnSearchChange}/>
      </Row>
      <Row>
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </Row>
      <Row>
      {forecast && <Forecast data={forecast} />}
      </Row>
    </Container>
  )
}

export default Home