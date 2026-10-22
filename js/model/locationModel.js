export const getCityName = async (lat, lon) => {
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=da`
    const response = await fetch(url)
    const data = await response.json()
    return data.city || data.locality
}
