const fallback = { lat: 57.05, lon: 9.93 }

export const getPosition = () => new Promise(resolve => {
    if (!navigator.geolocation) return resolve(fallback)

    navigator.geolocation.getCurrentPosition(
        pos => resolve({
            lat: pos.coords.latitude.toFixed(2),
            lon: pos.coords.longitude.toFixed(2)

        }),
        () => resolve(fallback)
        { timeout: 5000 }
    )
})
