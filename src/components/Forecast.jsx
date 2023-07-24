
import "./forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function Forecast({ data }) {
  const dayInWeek = new Date().getDay();

  const days = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  console.log(days);

  return (
    <>
      <label className="title">Daily:</label>

      {data.list.splice(0, 7).map((item, idx) => {
        return (
          <div className="daily-item" key={idx}>
            <p className="day-name">{days[idx]}</p>

            <div className="hello">
              <div>
                <p className="weather-description">{item.weather[0].description}</p>
                <p>Temp: {item.main.feels_like}°</p>
              </div>
              <img
                src={`icons/${item.weather[0].icon}.png`}
                alt="weather"
                className="icon-small"
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Forecast;
