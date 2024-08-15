(() => {

    class Box {
        constructor(box, images) {
            this.box = box
            this.images = images
            this.index = 0

            for (let image of this.images) {
                image.classList.remove("carousel-image")
            }

            this.render()
            this.show(0)
        }

        render() {
            const previous = document.createElement("div")
            previous.classList.add("carousel-button")
            previous.classList.add("carousel-button-prev")

            const next = document.createElement("div")
            next.classList.add("carousel-button")
            next.classList.add("carousel-button-next")

            previous.addEventListener("click", () => {
                this.prev()
            })
            next.addEventListener("click", () => {
                this.next()
            })

            this.box.prepend(previous)
            this.box.appendChild(next)
        }

        show(index) {
            if (index < 0 || index >= this.images.length) {
                return
            }

            this.images[this.index].classList.remove("carousel-image")
            this.images[index].classList.add("carousel-image")
            this.index = index
        }

        prev() {
            const index = this.index == 0 ? this.images.length - 1 : this.index - 1
            this.show(index)
        }

        next() {
            const index = this.index == this.images.length - 1 ? 0 : this.index + 1
            this.show(index)
        }
    }

    let registeredBoxes = new Map()

    const discover = () => {
        const boxes = document.querySelectorAll(".image-box.carousel")

        for (let box of boxes) {
            if (registeredBoxes.has(box)) {
                return
            }

            const images = box.getElementsByTagName("img")

            if (images.length === 0) {
                console.warn("Missing images for carousel", box)
                return
            }

            registeredBoxes.set(box, new Box(box, images))
        }
    }

    window.addEventListener("load", () => {
        discover()
    })
})()