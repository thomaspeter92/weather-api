import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import styles from '../styles/weatherMain.module.scss'
import Spinner from "./spinner"


const WeatherMain = ({weatherData}) => {
    const date = new Date(weatherData[0].dt*1000)
    const imgURl = `http://openweathermap.org/img/wn/${weatherData[0].weather[0].icon}@2x.png`

    
    return (
        <div className={styles.main}>

            { weatherData.length > 0 ?
            <>
                <h3 className={styles.main_title}><FontAwesomeIcon icon={faLocationDot}/> {weatherData[0].name}</h3>
                <p className={styles.main_date}>{date.toDateString()}</p>
                <img src={imgURl}/>
            </>
            :
            <Spinner />
            }
        </div>
    )
}

export default WeatherMain