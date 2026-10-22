import { createDiv } from '../atoms/index.js'
import { dayRow } from '../molecules/dayRow.js'

export const dayList = days => {
    const element = createDiv('day-list')
    element.append(...days.map(dayRow))
    return element
}
