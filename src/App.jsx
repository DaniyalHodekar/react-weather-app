import Search from "./components/search";
import Currentweather from "./components/CurrentWeather";

import { WEATHER_URL, API_KEY } from "./api";
import { useState } from "react";
import Forecast from "./components/Forecast";

function App() {

const [currentWeather, setCurrentWeather] = useState(null);
const [forecastWeather, setForecastWeather] = useState(null);


  function handleOnSearchChange (searchData){
    const [ lat, lon ] =  searchData.value.split("");

    const url = `${WEATHER_URL}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const foreCastUrl = `${WEATHER_URL}forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; 

    Promise.all([fetch(url),fetch(foreCastUrl)])
    .then( async (res) =>{

      if(!res[0].ok) return

      const weather = await res[0].json();
      const forecast = await res[1].json();

      setCurrentWeather({city: searchData.label,...weather});
      setForecastWeather({ city: searchData.label, ...forecast });
    })
    .catch((err)=> console.error(err));
  }

  console.log(currentWeather)
  console.log(forecastWeather)


  return (
    <div className="container">
      <h1 style={{
        color:"white",
        letterSpacing:"2px"
      }}>
        Rain Man
      </h1>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <Currentweather data={currentWeather} />}
      {forecastWeather && <Forecast data={forecastWeather} />}
    </div>
  );
}

export default App;
