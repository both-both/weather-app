import { createDiv, createHeading, createParagraph, createImage } from '../components/atoms/index.js'
import { hourlyStrip } from '../components/organisms/hourlyStrip.js'
import { windIndicator } from '../components/molecules/windIndicator.js'


export const dayView = day => {
    const element = createDiv('day')
    element.style.setProperty('--weather-color', day.color)

    //hjælpefunktion over dayView
    const precipitationText = day => {
        if (day.precipitation === 0) return 'Ingen nedbør'
        if (day.snow > 0) return `Sne ${day.precipitation} mm`
        return `Regn ${day.precipitation} mm`
    }


    element.append(
        createImage(`assets/icons/${day.icon}.svg`, day.label, 'day-icon'),
        createHeading(1, `${day.max}°`),
        createParagraph(`Lav ${day.min}°`),
        windIndicator(day.windSpeed, day.windDirection),
        createParagraph(day.label),
        hourlyStrip(day.hours),
        createParagraph(precipitationText(day)),


    )




    return element

}
