const CACHE = 'static-v1'

const FILES = [
    './',
    './index.html',
    './style.css',
    './main.js',
    './manifest.json',
    './js/router/router.js',
    './js/model/weatherModel.js',
    './js/controller/dayController.js',
    './js/controller/weekController.js',
    './js/utils/formatDay.js',
    './js/utils/geo.js',
    './js/utils/swipe.js',
    './js/utils/weatherCodes.js',
    './js/view/components/atoms/index.js',
    './js/view/components/molecules/dayRow.js',
    './js/view/components/molecules/hourItem.js',
    './js/view/components/molecules/windIndicator.js',
    './js/view/components/organisms/dayList.js',
    './js/view/components/organisms/hourlyStrip.js',
    './js/view/pages/dayView.js',
    './js/view/pages/weekView.js',
    './assets/icons/arrow.svg',
    './assets/icons/cloud.svg',
    './assets/icons/drizzle.svg',
    './assets/icons/fog.svg',
    './assets/icons/rain.svg',
    './assets/icons/snow.svg',
    './assets/icons/storm.svg',
    './assets/icons/sun-cloud.svg',
    './assets/icons/sun.svg'

]
// INSTALL: gem filerne i cache
self.addEventListener("install", (event) => {
    console.log("Service worker: install");

    event.waitUntil(
        caches.open(CACHE).then((cache) => cache.addAll(FILES))

    );
});

// ACTIVATE: Service Worker aktiveres og den er klat til brug - husk at lukke åbne tabs i browseren
self.addEventListener("activate", () => {
    console.log("Service worker: activate");
});


// 3. FETCH: to caching strategier - api.open-meteo (api + billeder): NETWORK FIRST -> ny data når vi er online, tidligere data når vi er offline - alt andet (statiske filer): CACHE FIRST

self.addEventListener("fetch", (event) => {

    if (event.request.url.includes("api.open-meteo")) {
        event.respondWith(networkFirst(event.request));
        console.log("Service worker: network first", event.request.url);
    } else {
        event.respondWith(cacheFirst(event.request));
        console.log("Service worker: caches first", event.request.url);
    }
});


// CACHE FIRST: kig i cachen først, ellers hent fra netværket
function cacheFirst(request) {
    return caches.match(request).then((response) => {
        if (response) {
            // Fundet i cachen
            return response;
        } else {
            // Ikke i cachen, hent fra netværket
            return fetch(request);
        }
    });
}



// NETWORK FIRST: hent fra netværket først, ellers brug cachen
function networkFirst(request) {
    return fetch(request)
        .then((response) => {
            // Vi er online: gem en kopi i cachen og send svaret videre
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copy));
            return response;
        })
        .catch(() => {
            // Vi er offline: hent den sidste data fra cachen
            return caches.match(request);
        });
}
