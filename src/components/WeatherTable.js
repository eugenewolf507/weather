import { useState, useEffect } from 'react';
const WeatherTable = ({ cityAddedArr }) => {
  const API_key = 'tONo2lZrXACMgEsso0j4EdZFAuuC8DyA';
  const numberOfDays = 5;
  const searchURL = `http://dataservice.accuweather.com/forecasts/v1/daily/`;
  const [wetherArr, setWeatherArr] = useState([]);
  useEffect(() => {
    cityAddedArr.forEach((city) => {
      // console.log(city.Key);
      fetch(
        `${searchURL}${numberOfDays}day/${city.Key}?apikey=${API_key}&metric=true`
      )
        .then((response) => {
          return response.json();
        })
        .then(
          (weatherData) => {
            // console.log(weatherData.DailyForecasts);
            setWeatherArr([
              ...wetherArr,
              { city, weather: weatherData.DailyForecasts },
            ]);
          },
          (error) => {
            console.log(error);
          }
        );
    });
  }, [cityAddedArr]);

  return (
    <div>
      <h3>WeatherTable</h3>

      {wetherArr.map((city) => {
        // console.log(city.weather);
        return (
          <div key={city.city.Key}>
            <h4>
              {city.city.LocalizedName} (
              {city.city.AdministrativeArea.LocalizedName}) -{' '}
              {city.city.Country.LocalizedName}
            </h4>
            <ul>
              {city.weather.map((day) => (
                <li>{day.Temperature.Maximum.Value}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherTable;
