import { getWeatherData } from '../model/weatherModel.js'
import { getPosition } from '../model/geoModel.js'
import { formatDay } from '../utils/formatDay.js'
import { weekView } from '../view/pages/weekView.js'
import { onSwipe } from '../utils/swipe.js'


// CONTROLLER: henter data til 5 dage og viser ugevisningen
export const weekController = async () => {
    const { lat, lon } = await getPosition()
    const data = await getWeatherData(lat, lon)

    // lav hver dag i daily om til et dag-objekt
    const days = data.daily.time.map((date, i) => formatDay(data, i))
    console.log(days)


    // ryd siden og vis ugevisningen
    const root = document.getElementById('root')
    root.innerHTML = ''

    const view = weekView(days)

    // swipe til højre går tilbage til i dag
    onSwipe(view, { right: () => location.hash = '#/' })

    root.append(view)


}