import { createDiv, createHeading } from '../components/atoms/index.js'
import { dayList } from '../components/organisms/dayList.js'

export const weekView = days => {
    const element = createDiv('week')
    element.append(
        createHeading(1, 'Næste 5 dage'),
        dayList(days)
    )
    return element
}

