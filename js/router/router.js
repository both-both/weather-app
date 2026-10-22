import { dayController } from '../controller/dayController.js'
import { weekController } from '../controller/weekController.js'


const handleRoute = () => {
    const segments = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean)

    if (segments.length === 0) return dayController()
    //dag
    if (segments[0] === 'day') return dayController(segments[1])
    //uge
    if (segments[0] === 'week') return weekController()


    document.getElementById('root').innerHTML = '<h1>Siden findes ikke</h1>'
}

export const initRouter = () => {
    window.addEventListener('hashchange', handleRoute)
    handleRoute()
}
