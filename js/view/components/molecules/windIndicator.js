import { createDiv, createImage, createParagraph } from '../atoms/index.js'

export const windIndicator = (speed, direction) => {
    const element = createDiv('wind')

    const arrow = createImage('assets/icons/arrow.svg', `Vind fra ${direction}°`, 'wind-arrow')
    arrow.style.transform = `rotate(${direction + 180}deg)`

    element.append(arrow, createParagraph(`${speed} m/s`))
    return element
}
