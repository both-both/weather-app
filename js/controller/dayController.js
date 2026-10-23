import { getWeatherData } from "../model/weatherModel.js"
import { getWeather, getColor } from "../utils/weatherCodes.js"
import { getPosition } from '../model/geoModel.js'
import { dayView } from "../view/pages/dayView.js"
import { formatDay } from "../utils/formatDay.js"
import { onSwipe } from "../utils/swipe.js"
import { getCityName } from '../model/locationModel.js'

// CONTROLLER: henter data til én dag og viser dagsvisningen
// date kommer fra routeren (#/day/2026-10-24) - ingen date = i dag
export const dayController = async date => {
    const { lat, lon } = await getPosition()
    const data = await getWeatherData(lat, lon)
    // find dagens plads i daily-arrays - 0 er i dag
    const i = date ? data.daily.time.indexOf(date) : 0
    const day = formatDay(data, i)
    day.city = await getCityName(lat, lon)

    // lav time-data om til objekter og behold kun timerne for den valgte dag
    const hours = data.hourly.time
        .map((time, h) => ({
            time: time.slice(11, 16), // "2026-10-24T14:00" -> "14:00"
            temp: data.hourly.temperature_2m[h],
            icon: getWeather(data.hourly.weather_code[h]).icon
        }))
        .filter((hour, h) => data.hourly.time[h].startsWith(day.date))

    day.hours = hours
    day.name = i === 0
        ? 'I dag'
        : new Date(day.date).toLocaleDateString('da-DK', { weekday: 'long' })
    // i dag vises den aktuelle temperatur, andre dage max-temperaturen
    day.temp = i === 0

    day.temp = i === 0
        ? Math.round(data.current.temperature_2m)
        : day.max
    // i dag vises det aktuelle vejr i stedet for dagens samlede vejrkode
    if (i === 0) {
        const now = getWeather(data.current.weather_code)
        day.icon = now.icon
        day.label = now.label
        day.color = getColor(now.icon)
    }


    console.log(day)
    // ryd siden og vis dagsvisningen
    const root = document.getElementById('root')
    root.innerHTML = ''

    const view = dayView(day)
    // swipe til venstre går til 5 dages oversigten
    onSwipe(view, { left: () => location.hash = '#/week' })
    root.append(view)


}
