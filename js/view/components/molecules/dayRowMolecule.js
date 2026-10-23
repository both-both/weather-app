import { createLink, createImage, createParagraph } from '../atoms/index.js'
import { windIndicator } from './windIndicatorMolecule.js'

// MOLECULE: En dag i 5 dages oversigten - linker til dagens detaljer
export const dayRow = day => {
    const element = createLink(`#/day/${day.date}`, 'day-row')
    // "2026-10-24" -> "lør."
    const weekday = new Date(day.date).toLocaleDateString('da-DK', { weekday: 'short' })

    element.append(
        createParagraph(weekday),
        createImage(`assets/icons/${day.icon}.svg`, day.label, 'row-icon'),
        createParagraph(`${day.max}° / ${day.min}°`),
        createParagraph(`${day.precipitation} mm`),
        windIndicator(day.windSpeed, day.windDirection)
    )

    return element
}
