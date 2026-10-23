import { createDiv, createImage, createParagraph } from '../atoms/index.js'

// MOLECULE: pil der viser vindretning + vindstyrke i m/s
export const windIndicator = (speed, direction) => {
    const element = createDiv('wind')

    const arrow = createImage('assets/icons/arrow.svg', `Vind fra ${direction}°`, 'wind-arrow')
    // direction er hvor vinden kommer fra +180 får pilen til at pege den vej vinden blæser
    arrow.style.transform = `rotate(${direction + 180}deg)`

    element.append(arrow, createParagraph(`${speed} m/s`))
    return element
}
