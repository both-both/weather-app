// MODEL: finder bynavnet ud fra koordinater (reverse geocoding) via BigDataCloud
export const getCityName = async (lat, lon) => {
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=da`
    const response = await fetch(url)
    const data = await response.json()

    // nogle steder har ingen city, så brug locality i stedet
    return data.city || data.locality
}
