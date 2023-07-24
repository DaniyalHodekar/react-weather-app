import "./currentweather.css";

function currentweather({data}) {

    const {
      city,
      main: { feels_like, humidity, pressure,temp },
      wind:{speed},
      weather
    } = data;

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{city}</p>
          <p className="weather-desc">{weather[0].description}</p>
        </div>
        <img src={`icons/${weather[0].icon}.png`} alt="weather" className="main-icon"/>
      </div>
      <div className="bottom">
        <p className="temp">{temp.toFixed(1)}<span className="degree">°</span></p>
        <div className="details">
          <div className="paramater-row">
            <span className="param-label">Feels Like: </span>
            <span className="param-value">{feels_like}°</span>
          </div>
          <div className="paramater-row">
            <span className="param-label">Wind: </span>
            <span className="param-value">{speed} m/s</span>
          </div>
          <div className="paramater-row">
            <span className="param-label">Humidity: </span>
            <span className="param-value">{humidity}%</span>
          </div>
          <div className="paramater-row">
            <span className="param-label">Pressure: </span>
            <span className="param-value">{pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default currentweather;
