// MODEL: henter vejrdata fra Open-Meteo
const BASE_URL = 'https://api.open-meteo.com/v1/forecast'


// bygger URL'en med query-parametre ud fra en position
// current = vejret lige nu, hourly = time for time, daily = 5 dages oversigt
const buildUrl = (lat, lon) => {
    const params = new URLSearchParams({
        latitude: lat,
        longitude: lon,
        current: 'temperature_2m,weather_code,wind_speed_10m,wind_direction_10m,precipitation',
        hourly: 'temperature_2m,weather_code,wind_speed_10m,wind_direction_10m,precipitation,rain,snowfall',
        daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,snowfall_sum,precipitation_probability_max,wind_speed_10m_max,wind_direction_10m_dominant',
        // vind i m/s i stedet for km/t
        wind_speed_unit: 'ms',
        timezone: "auto",
        forecast_days: 5,
    })
    // URLSearchParams sætter selv ? & og = ind
    return `${BASE_URL}?${params}`

    return `${BASE_URL}?${params}`
}

// henter vejrdata for en position - Aalborg er standard hvis der ikke gives koordinater
export const getWeatherData = async (lat = 57.05, lon = 9.93) => {
    const response = await fetch(buildUrl(lat, lon))
    return response.json()
}