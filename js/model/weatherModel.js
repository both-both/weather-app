const api = (lat, lon) => `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m,wind_direction_10m,precipitation&hourly=temperature_2m,weather_code,wind_speed_10m,wind_direction_10m,precipitation,rain,snowfall&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,snowfall_sum,precipitation_probability_max,wind_speed_10m_max,wind_direction_10m_dominant&wind_speed_unit=ms&forecast_days=5&timezone=auto`

export const getWeatherData = async (lat = 57.05, lon = 9.93) => {
    const response = await fetch(api(lat, lon))
    return response.json()
}