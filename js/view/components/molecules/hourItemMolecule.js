import { createDiv, createImage, createParagraph } from '../atoms/index.js'

// MOLECULE: én time med temperatur, ikon og klokkeslæt
export const hourItem = hour => {
    const element = createDiv('hour')

    element.append(
        createParagraph(`${hour.temp}°`),
        createImage(`assets/icons/${hour.icon}.svg`, '', 'hour-icon'),
        createParagraph(hour.time)
    )

    return element
}
