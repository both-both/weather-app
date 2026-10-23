# Vejr App

En Progressive Web App der viser vejret på brugerens lokation, bygget i vanilla JavaScript med data fra [Open-Meteo](https://open-meteo.com/).

- **Live:** https://both-both.github.io/weather-app/
- **Design (Figma):** https://www.figma.com/design/m8l9Cs1ntiXj5LSl5o6BVZ/Vejr-App?node-id=0-1

## Funktioner

- **Dagens vejr** (landing page): aktuel temperatur og vejrtype på brugerens lokation, dagens min/max, vind, nedbør og time-for-time oversigt.
- **5 dages oversigt**: én række pr. dag. Klik på en dag for at se dens detaljer.
- **Swipe** mellem dagsvisning og 5 dages oversigt.
- **Offline**: appen kan installeres og viser sidst hentede vejrdata uden internet.

Data der vises: temperatur, vindstyrke (10 m), vindretning, vejrtype med ikon og nedbør (regn/sne).

## Teknik

- Vanilla JavaScript med ES modules
- MVC-struktur
- Atomic design i view-laget
- Hash-baseret router (`#/`, `#/day/2026-10-24`, `#/week`)
- Responsivt layout uden breakpoints
- Service worker og web manifest

### API'er

| API                   | Bruges til                                                      |
| --------------------- | --------------------------------------------------------------- |
| Open-Meteo            | Vejrdata: current, hourly og daily for 5 dage                   |
| Geolocation (browser) | Brugerens position. Falder tilbage til Aalborg hvis den afvises |
| BigDataCloud          | Bynavn ud fra koordinater                                       |

### Caching-strategi

| Indhold                                | Strategi                          |
| -------------------------------------- | --------------------------------- |
| API-kald (Open-Meteo, BigDataCloud)    | Network first, fallback til cache |
| Statiske filer (HTML, CSS, JS, ikoner) | Cache first, fallback til netværk |

## Struktur

```
main.js                  registrerer service worker og starter routeren
sw.js                    service worker med caching
js/
  router/router.js       vælger controller ud fra URL'ens hash
  model/
    geoModel.js          brugerens position med fallback
    locationModel.js     bynavn ud fra koordinater
    weatherModel.js      henter vejrdata fra Open-Meteo
  controller/
    dayController.js     data til én dag -> dayView
    weekController.js    data til 5 dage -> weekView
  utils/
    formatDay.js         samler én dags data i ét objekt
    weatherCodes.js      vejrkode -> label, ikon og farve
    swipe.js             swipe-genkendelse
  view/
    components/
      atoms/             div, overskrift, tekst, billede, link
      molecules/         dayRow, hourItem, windIndicator
      organisms/         dayList, hourlyStrip
    pages/               dayView, weekView
```

**Dataflow:** router → controller → model henter data → controller formaterer → view bygger DOM.

## Kør lokalt

Appen bruger ES modules og service worker, så den skal køre via en server, ikke `file://`. Brug fx Live Server i VS Code og åbn `index.html`.
