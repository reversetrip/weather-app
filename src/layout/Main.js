import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from '../components/WeatherCard';
import './styles/Main.scss';

const Main = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState('');
  const [URL, setURL] = useState('https://api.openweathermap.org/data/2.5/forecast?&q=Lviv&lang=en&units=metric&appid=ce69bcff813131c70ea96cbc1448bbb5');
  const [display, setDisplay] = useState('days');

  useEffect(() => {
    async function getWeatherData() {
      try {
        const response = await axios.get(URL);

        setIsLoaded(true);
        setWeatherData(response);
        if (error) setError(null);

      } catch (e) {
        setIsLoaded(true);
        setError(e);
      }
    }
    getWeatherData();
  }, [URL]);

  function searchCity() {
    if (city.trim() !== '') {
      setIsLoaded(false);
      if (display !== 'days') setDisplay('days');
      setURL(`https://api.openweathermap.org/data/2.5/forecast?&q=${city}&lang=en&units=metric&appid=ce69bcff813131c70ea96cbc1448bbb5`);
    }
    setCity('');
  };

  const seeFullDay = (dayNum) => setDisplay(dayNum);

  function formDays() {
    let daytime = new Date(weatherData.data.list[0].dt_txt).getHours();
    daytime = daytime < 10 ? `0${daytime}:00:00` : `${daytime}:00:00`;

    const list = weatherData.data.list.filter(step => (
      step.dt_txt.includes(daytime)
    ));

    return list.map(step => (
      <WeatherCard
        key={step.dt_txt}
        step={step}
        seeFullDay={seeFullDay}
        day={true} />
    ));
  };

  function formFullDay() {
    const oneFullDay = weatherData.data.list.filter(step => {
      const day = new Date(step.dt_txt).getDate();
      if (day === parseInt(display)) return true;
      return false;
    });

    return oneFullDay.map(step => (
      <WeatherCard
        key={step.dt_txt}
        step={step}
        seeFullDay={null}
        day={null} />
    ));
  };

  return (
    <main className='main'>
      {error ? <h2>SOMETHING WENT WRONG</h2>
        : !isLoaded ? <h2>LOADING...</h2>
          : (
            <>
              <p className='cityTitle'>{weatherData.data.city.name}</p>
              {display === 'days' ? <div className='daysContainer'>{formDays()}</div>
                : <>
                  <div className='fullDayContainer'>{formFullDay()}</div>
                  <button
                    className='backBtn'
                    onClick={() => setDisplay('days')}>
                    BACK
                  </button>
                </>}
            </>
          )}
      <div className='searchPanel'>
        <input
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder='city to search for' />
        <button onClick={searchCity}>search</button>
      </div>
    </main>
  );
};
export default Main;