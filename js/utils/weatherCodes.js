// oversætter Open-Meteos WMO-vejrkode til dansk label og ikonnavn
export const getWeather = code => {
    switch (code) {
        case 0:
            return { label: 'Klart', icon: 'sun' }
        case 1:
            return { label: 'Overvejende klart', icon: 'sun-cloud' }
        case 2:
            return { label: 'Delvist skyet', icon: 'sun-cloud' }
        case 3:
            return { label: 'Overskyet', icon: 'cloud' }
        case 45:
            return { label: 'Tåge', icon: 'fog' }
        case 48:
            return { label: 'Rimtåge', icon: 'fog' }
        case 51:
            return { label: 'Let støvregn', icon: 'drizzle' }
        case 53:
            return { label: 'Støvregn', icon: 'drizzle' }
        case 55:
            return { label: 'Tæt støvregn', icon: 'drizzle' }
        case 61:
            return { label: 'Let regn', icon: 'rain' }
        case 63:
            return { label: 'Regn', icon: 'rain' }
        case 65:
            return { label: 'Kraftig regn', icon: 'rain' }
        case 71:
            return { label: 'Let sne', icon: 'snow' }
        case 73:
            return { label: 'Sne', icon: 'snow' }
        case 75:
            return { label: 'Kraftig sne', icon: 'snow' }
        case 80:
            return { label: 'Lette byger', icon: 'rain' }
        case 81:
            return { label: 'Byger', icon: 'rain' }
        case 82:
            return { label: 'Kraftige byger', icon: 'rain' }
        case 95:
            return { label: 'Torden', icon: 'storm' }

        // koder vi ikke kender
        default:
            return { label: 'Ukendt', icon: 'cloud' }
    }
}

// baggrundsfarve til hver vejrtype - bruges som --weather-color
const colors = {
    'sun': '#ffb237',
    'sun-cloud': '#f3d88e',
    'cloud': '#aacdef',
    'fog': '#e2e2e2',
    'drizzle': '#c7dcec',
    'rain': '#caddec',
    'snow': '#ceeefe',
    'storm': '#b4b4cc'
}

export const getColor = icon => colors[icon] ?? colors.cloud
