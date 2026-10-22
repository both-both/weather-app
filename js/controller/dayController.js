import { getWeatherData } from "../model/weatherModel.js"
import { getWeather } from "../utils/weatherCodes.js"
import { getPosition } from '../utils/geo.js'
import { dayView } from "../view/pages/dayView.js"
import { formatDay } from "../utils/formatDay.js"
import { onSwipe } from "../utils/swipe.js"
import { getCityName } from '../model/locationModel.js'


export const dayController = async date => {
    const { lat, lon } = await getPosition()
    const data = await getWeatherData(lat, lon)
    const i = date ? data.daily.time.indexOf(date) : 0
    const day = formatDay(data, i)
    day.city = await getCityName(lat, lon)

    const hours = data.hourly.time
        .map((time, h) => ({
            time: time.slice(11, 16),
            temp: data.hourly.temperature_2m[h],
            icon: getWeather(data.hourly.weather_code[h]).icon
        }))
        .filter((hour, h) => data.hourly.time[h].startsWith(day.date))

    day.hours = hours
    day.name = i === 0
        ? 'I dag'
        : new Date(day.date).toLocaleDateString('da-DK', { weekday: 'long' })



    console.log(day)
    const root = document.getElementById('root')
    root.innerHTML = ''

    const view = dayView(day)
    onSwipe(view, { left: () => location.hash = '#/week' })
    root.append(view)


}
