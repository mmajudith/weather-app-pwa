import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '68aca2966fd7ae57462c21f57fa7866b'

export const fetchWeather = async (query) =>{
    const { data } = await axios.get(URL, {
        params: { 
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    });

    return data; 
}