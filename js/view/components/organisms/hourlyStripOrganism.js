import { createDiv } from '../atoms/index.js'
import { hourItem } from '../molecules/hourItemMolecule.js'

// ORGANISM: vandret liste med dagens timer
export const hourlyStrip = hours => {
    const element = createDiv('hourly')
    element.append(...hours.map(hourItem))
    element.addEventListener('pointerdown', event => event.stopPropagation())

    return element
}
