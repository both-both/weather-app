// ATOMS: de mindste byggeklodser - hver funktion laver ét HTML-element
export const createDiv = (className = '') => {
    const element = document.createElement('div')
    element.className = className
    return element
}

export const createHeading = (num, text, className = '') => {
    const element = document.createElement(`h${num}`)
    element.className = className
    element.textContent = text
    return element
}

export const createParagraph = (text = '', className = '') => {
    const element = document.createElement('p')
    element.className = className
    element.textContent = text
    return element
}

export const createImage = (src, alt = '', className = '') => {
    const element = document.createElement('img')
    element.src = src
    element.alt = alt
    element.className = className
    return element
}

export const createLink = (href, className = '') => {
    const element = document.createElement('a')
    element.href = href
    element.className = className
    return element
}

