import { getWeather, getColor } from './weatherCodes.js'

// samler data for én dag (index i) fra Open-Meteos daily-arrays i ét objekt
export const formatDay = (data, i) => ({
    date: data.daily.time[i],
    code: data.daily.weather_code[i],
    max: data.daily.temperature_2m_max[i],
    min: data.daily.temperature_2m_min[i],
    rain: data.daily.rain_sum[i],
    snow: data.daily.snowfall_sum[i],
    windSpeed: data.daily.wind_speed_10m_max[i],
    windDirection: data.daily.wind_direction_10m_dominant[i],
    label: getWeather(data.daily.weather_code[i]).label,
    icon: getWeather(data.daily.weather_code[i]).icon,
    color: getColor(getWeather(data.daily.weather_code[i]).icon),
    precipitation: data.daily.precipitation_sum[i]
})
