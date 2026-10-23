// kalder left() eller right() når brugeren swiper mere end 50px på elementet
export const onSwipe = (element, { left, right }) => {
    let startX = null
    // så både fingre og mus kan bruges: pointerdown og pointerup. 
    element.addEventListener('pointerdown', e => { startX = e.clientX })
    element.addEventListener('pointerup', e => {
        startX = null // nulstil til næste swipe
        if (startX === null) return
        const dx = e.clientX - startX
        startX = null
        //hvor langt brugeren har trukket. Hvis tallet er negativt, er der trukket mod venstre
        if (dx < -50 && left) left()
        if (dx > 50 && right) right()
    })
}
