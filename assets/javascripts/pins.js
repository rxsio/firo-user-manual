(() => {
    /**
     * @description Small scripts for implementing image pins
     */

    const getNumberAttribute = (element, attribute, defaultValue) => {
        if (!element.hasAttribute(attribute)) {
            return defaultValue
        }

        value = parseFloat(element.getAttribute(attribute))

        if (isNaN(value)) {
            return defaultValue
        }

        return value
    }

    class Pin {
        constructor(image, element, left = 0, top = 0) {
            this.image = image
            this.element = element
            this.top = top
            this.left = left

            this.observer = new ResizeObserver(() => {
                update()
            })
            this.observer.observe(this.image)
        }

        get x() {
            return getNumberAttribute(this.element, "data-y", 0)
        }

        get y() {
            return getNumberAttribute(this.element, "data-x", 0)
        }

        enable() {
            this.element.style.display = "block"
        }

        disable() {
            this.element.style.display = "none"
        }

        update(image) {
            if (this.image.offsetWidth == 0 || this.image.offsetHeight == 0) {
                this.disable()
                return
            }


            this.enable()


            this.top = this.image.offsetTop + this.y * this.image.height
            this.left = this.image.offsetLeft + this.x * this.image.width

            this.element.style.top = this.top + "px"
            this.element.style.left = this.left + "px"
        }
    }

    class Box {
        constructor(box, pins) {
            this.box = box
            this.pins = pins
        }

        get id() {
            return this.box
        }

        update() {
            for (let pin of this.pins) {
                pin.update()
            }
        }
    }

    let registeredBoxes = new Map()

    const discover = () => {
        const boxes = document.querySelectorAll(".image-box.pins")

        for (let box of boxes) {
            if (registeredBoxes.has(box)) {
                continue
            }

            const pinElements = box.getElementsByClassName("pin")
            const images = box.getElementsByTagName("img")

            if (images.length === 0) {
                for (let pin of pinElements) {
                    pin.style.display = "none"
                }

                console.warn("Missing image for pin box", box)
                return
            }

            let pins = []
            for (let pinElement of pinElements) {
                const imageId = getNumberAttribute(pinElement, "data-id", 0)

                if (imageId < 0 || imageId >= images.length) {
                    console.warn("Invalid pin id", pinElement)
                    continue
                }

                pins.push(new Pin(images[imageId], pinElement))
            }

            registeredBoxes.set(box, new Box(box, pins))
        }
    }

    const update = () => {
        for (let box of registeredBoxes.values()) {
            box.update()
        }
    }

    window.addEventListener("load", () => {
        discover()
        update()
    })

    window.addEventListener("resize", () => {
        discover()
        update()
    })

    window.addEventListener('popstate', () => {
        discover()
        update()
    })
})()