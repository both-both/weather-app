import { dayController } from '../controller/dayController.js'
import { weekController } from '../controller/weekController.js'


// ROUTER: vælger controller ud fra URL'ens hash
const handleRoute = () => {
    const segments = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean)

    // ingen hash = landing page med dagens vejr
    if (segments.length === 0) return dayController()
    //dag
    if (segments[0] === 'day') return dayController(segments[1])
    //uge
    if (segments[0] === 'week') return weekController()

    // ukendt route
    document.getElementById('root').innerHTML = '<h1>Siden findes ikke</h1>'
}

// kør handleRoute ved hvert hash-skift og én gang ved opstart
export const initRouter = () => {
    window.addEventListener('hashchange', handleRoute)
    handleRoute()
}
