import { ref } from "vue"
import useLockScroll from "./use-lock-scroll"

export default (() => {
    const open = ref(false)
    const setOpenTo = (val: boolean) => {
        open.value = val
        if (open.value) {
            useLockScroll.lock()
        } else {
            useLockScroll.unlock()
        }
    }

    const activeImg = ref(0)
    const swapImg = (index: number) => {
        let toIndex = index
        // wrap if OOB
        if (index >= images.value.length) {
            toIndex = 0
        } else if (index < 0) {
            toIndex = images.value.length - 1
        }

        activeImg.value = toIndex
    }
    const images = ref([
        `/assets/images/image-product-1.jpg`,
        `/assets/images/image-product-2.jpg`,
        `/assets/images/image-product-3.jpg`,
        `/assets/images/image-product-4.jpg`,
    ])

    return {
        activeImg,
        swapImg,
        images,
        open,
        setOpenTo,
    }
})()