(() => {
    const setup = () => {
        const boxes = document.getElementsByClassName("image-box")

        for (let box of boxes) {
            if (box.classList.contains("pins")) {
                setupBox(box)
            }
        }
    }

    const setupBox = (box) => {
        const pins = box.getElementsByClassName("pin")
        const images = box.getElementsByTagName("img")
        
        if (images.length === 0) {
            for (let pin of pins) {
                pin.style.display = "none"
            }
            return
        }

        const image = images[images.length - 1]

        for (let pin of pins) {
            setupPin(image, box, pin)
        }
    }

    const setupPin = (image, box, pin) => {
        const getNumberAttribute = (attribute, defaultValue) => {
            if (pin.hasAttribute(attribute)) {
                value = parseFloat(pin.getAttribute(attribute))

                if (!isNaN(value)) {
                    return value
                }
            }

            return defaultValue
        }

        const x = getNumberAttribute("data-x", 0)
        const y = getNumberAttribute("data-y", 0)

        pin.style.top = (image.offsetTop + y * image.offsetHeight) + "px"
        pin.style.left = (image.offsetLeft + x * image.offsetWidth) + "px"

        console.log(image, box, pin, x, y)
        window.pin = pin
    }

    window.addEventListener("load", () => {
        setup()

        setTimeout(() => {
            setup()
        }, 2000)
    });

    window.addEventListener("resize", () => {
        setup()
    });
})()