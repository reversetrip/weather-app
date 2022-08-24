import React from 'react';
import './WeatherCard.scss';

const WeatherCard = ({ step, seeFullDay, day }) => {
  const temp = Math.round(step.main.temp);
  const feels = Math.floor(step.main.feels_like);
  const weather = step.weather[0].description;
  const icon = `owf owf-${step.weather[0].id} owf-${day ? '5' : '4'}x`;
  const title = !day ? step.dt_txt.slice(11)
    : new Date(step.dt_txt).toLocaleString('en', { weekday: 'long' });

  const dayNum = `${new Date(step.dt_txt).getDate()}day`;

  return (
    <div
      className={day ? 'dayCardContainer' : 'hourCardContainer'}
      onClick={() => { if (day) seeFullDay(dayNum) }}>
      <div className='cardTitle'>{title}</div>
      <div className='cardIcon'>
        <i className={icon}></i>
      </div>
      <div className='cardDescription'>
        <span>{weather}</span>
        <span>Tempreture: {temp}°C</span>
        <span>Feels like: {feels}</span>
      </div>
    </div>
  );
};

export default WeatherCard;