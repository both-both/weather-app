// MODEL: henter brugerens position via browserens geolocation
// fallback hvis vi ikke kan få en position Aalborg
const fallback = { lat: 57.05, lon: 9.93 }


// returnerer et promise der altid resolver - enten med brugerens position eller fallback
export const getPosition = () => {
    return new Promise((resolve) => {
        // browseren understøtter ikke geolocation
        if (!navigator.geolocation) {
            console.log("Geolocation is not supported by your browser");
            return resolve(fallback)

        }

        navigator.geolocation.getCurrentPosition(
            // success: brug brugerens koordinater
            (position) => resolve({
                lat: position.coords.latitude,
                lon: position.coords.longitude
            }),

            // fejl: brugeren afviser eller position kan ikke findes
            () => {
                console.log("no position error")
                resolve(fallback);
            }
        )
    })
}