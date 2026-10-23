import { createDiv, createHeading, createParagraph, createImage } from '../components/atoms/index.js'
import { hourlyStrip } from '../components/organisms/hourlyStripOrganism.js'
import { windIndicator } from '../components/molecules/windIndicatorMolecule.js'

// oversætter nedbør til tekst ingen, sne eller regn
const precipitationType = day => {
    if (day.precipitation === 0) return 'Ingen nedbør'
    if (day.snow > 0) return 'Sne'
    return 'Regn'
}

// detaljer for en dag
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
        createHeading(1, `${day.temp}°`),
        summary,
        createParagraph(precipitationType(day)),
        hourlyStrip(day.hours)
    )

    return element
}
