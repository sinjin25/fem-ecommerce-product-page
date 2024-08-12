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
        new URL(`/assets/images/image-product-1.jpg`, import.meta.url).href,
        new URL(`/assets/images/image-product-2.jpg`, import.meta.url).href,
        new URL(`/assets/images/image-product-3.jpg`, import.meta.url).href,
        new URL(`/assets/images/image-product-4.jpg`, import.meta.url).href,
    ])

    return {
        activeImg,
        swapImg,
        images,
        open,
        setOpenTo,
    }
})()