import React, {useEffect, useState} from "react";
import Search from "./components/search";
import Spinner from "./components/spinner";
import WeatherMain from "./components/weatherMain";
import WeatherMinor from "./components/weatherMinor";
import WeatherWeekly from "./components/weatherWeekly";
// import axios from "axios";
import styles from './styles/main.module.scss'




// Add browser geo location

function App() {
  const [weatherData, setWeatherData] = useState([])

  console.log(weatherData)

  // 1 - search will own its local state & functions (cityInut, getWeather etc)
  // 2 - App will hold state that is the current data of searched city, passed up from search.
  // 3 - Weather main & minor will be passed the city data through props. 

  return (
    <div className={styles.app}>
      <div className={styles.container}>
          <Search setCurrentWeather={setWeatherData}/>

          { weatherData.length > 0 ?
          <>
            <WeatherMain weatherData={weatherData}/>
            <WeatherMinor />
            <WeatherWeekly />
          </>
          :
            <Spinner /> }
      </div>
    </div>
  );
}

export default App;
