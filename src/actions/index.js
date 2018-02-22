import axios from 'axios';

const API_KEY = 'f64c9bbf51a622561e660f8554051f15';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ca`
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
