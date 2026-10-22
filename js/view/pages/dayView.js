import { createDiv, createHeading, createParagraph, createImage } from '../components/atoms/index.js'
import { hourlyStrip } from '../components/organisms/hourlyStrip.js'
import { windIndicator } from '../components/molecules/windIndicator.js'

//hjælpefunktion over dayView
const precipitationType = day => {
    if (day.precipitation === 0) return 'Ingen nedbør'
    if (day.snow > 0) return 'Sne'
    return 'Regn'
}


export const dayView = day => {
    const element = createDiv('day')
    element.style.setProperty('--weather-color', day.color)

    const side = createDiv('day-side')
    side.append(
        windIndicator(day.windSpeed, day.windDirection),
        createParagraph(`${day.precipitation} mm`)
    )

    const summary = createDiv('day-summary')
    summary.append(
        createParagraph(`${day.name} ${day.min}° – ${day.max}°`, 'day-range'),
        side
    )

    element.append(
        createHeading(2, day.city, 'day-city'),
        createImage(`assets/icons/${day.icon}.svg`, day.label, 'day-icon'),
        createHeading(1, `${day.max}°`),
        summary,
        createParagraph(precipitationType(day)),
        hourlyStrip(day.hours)
    )

    return element
}
