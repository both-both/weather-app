const weatherCodes = {
    0: { label: 'Klart', icon: 'sun' },
    1: { label: 'Overvejende klart', icon: 'sun-cloud' },
    2: { label: 'Delvist skyet', icon: 'sun-cloud' },
    3: { label: 'Overskyet', icon: 'cloud' },
    45: { label: 'Tåge', icon: 'fog' },
    48: { label: 'Rimtåge', icon: 'fog' },
    51: { label: 'Let støvregn', icon: 'drizzle' },
    53: { label: 'Støvregn', icon: 'drizzle' },
    55: { label: 'Tæt støvregn', icon: 'drizzle' },
    61: { label: 'Let regn', icon: 'rain' },
    63: { label: 'Regn', icon: 'rain' },
    65: { label: 'Kraftig regn', icon: 'rain' },
    71: { label: 'Let sne', icon: 'snow' },
    73: { label: 'Sne', icon: 'snow' },
    75: { label: 'Kraftig sne', icon: 'snow' },
    80: { label: 'Lette byger', icon: 'rain' },
    81: { label: 'Byger', icon: 'rain' },
    82: { label: 'Kraftige byger', icon: 'rain' },
    95: { label: 'Torden', icon: 'storm' }
}

export const getWeather = code => weatherCodes[code] ?? { label: 'Ukendt', icon: 'cloud' }


const colors = {
    'sun': '#ffd27a',
    'sun-cloud': '#ffe3a8',
    'cloud': '#d4dae0',
    'fog': '#e2e2e2',
    'drizzle': '#c7dcec',
    'rain': '#b7d2e8',
    'snow': '#eef4fb',
    'storm': '#b4b4cc'
}

export const getColor = icon => colors[icon] ?? colors.cloud
