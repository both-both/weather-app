import { createDiv } from '../atoms/index.js'
import { dayRow } from '../molecules/dayRowMolecule.js'

// ORGANISM: listen med alle dage - én dayRow pr. dag
export const dayList = days => {
    const element = createDiv('day-list')
    element.append(...days.map(dayRow))
    return element
}
