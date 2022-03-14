import React, {useState, useEffect} from "react";
import styles from "../styles/search.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const API_KEY = '373e5945d9b6ee0be5ba7ac7bb090ffc';
const city_name ='london'


/*
TO-DO:
    1 - Add debouncing
    2 - Add auto complete of city
*/

const Search = ({setCurrentWeather}) => {
    const [currentCity, setCurrentCity] = useState('London')


    useEffect(() => {
        getWeather()
    }, []); 
    

    // Check inputs are valid
    const handleSubmit = (e) => {
        e.preventDefault()
        if(currentCity.replace(/ /g,'') !== '') {
            getWeather()
        }
        setCurrentCity('')
    }

    


    const getWeather = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${API_KEY}`, {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
          .then(res => {
            if (!res.ok) {
              throw new Error(res.statusText)
            } else {  
              return res.json()
            }
          })
          .then(data => {
            setCurrentWeather([data])
          })
          .catch(err => console.error(err));
      }

    return (

        <form className={styles.search} onSubmit={handleSubmit}>
            <input className={styles.search_input} type="text" value={currentCity} onChange={(e) => setCurrentCity(e.target.value)}></input>
            <FontAwesomeIcon className={styles.search_icon} icon={faSearch} />
        </form>
    )

}

export default Search