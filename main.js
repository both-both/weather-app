import { initRouter } from './js/router/router.js'

// REGISTERER SERVICE WORKER
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('./sw.js').then(() => console.log('App: service worker registered'))

}



initRouter()
