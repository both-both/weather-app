import { createDiv } from '../atoms/index.js'
import { hourItem } from '../molecules/hourItem.js'


export const hourlyStrip = hours => {
    const element = createDiv('hourly')
    element.append(...hours.map(hourItem))
    return element
}
