$(function() {

    function doSuit(el, pageWidth, pageHeight) {
        var h = pageHeight
        var w = pageWidth
        var iw = window.innerWidth
        var ih = window.innerHeight
        el.style.transformOrigin = '0 0'
        el.style.overflow = 'hidden'
        el.style.transform = `scale(${iw / w},${ih / h})`
    }

    function autoSuit(el, pageWidth, pageHeight) {
        doSuit(el, pageWidth, pageHeight)

        window.addEventListener('resize', () => {
            doSuit(el, pageWidth, pageHeight)
        })
    }

    if (window.innerWidth < 1600) {
        autoSuit(document.body, 1600, 900)
    }

    document.body.style.opacity = 1

    console.log(window.innerWidth, 111)
})