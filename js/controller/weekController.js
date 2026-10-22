import { getWeatherData } from '../model/weatherModel.js'
import { getPosition } from '../utils/geo.js'
import { formatDay } from '../utils/formatDay.js'
import { weekView } from '../view/pages/weekView.js'
import { onSwipe } from '../utils/swipe.js'


export const weekController = async () => {
    const { lat, lon } = await getPosition()
    const data = await getWeatherData(lat, lon)

    const days = data.daily.time.map((date, i) => formatDay(data, i))

    console.log(days)

    const root = document.getElementById('root')
    root.innerHTML = ''

    const view = weekView(days)
    onSwipe(view, { right: () => location.hash = '#/' })
    root.append(view)


}