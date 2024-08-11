import { ref } from "vue"

export default (() => {
    const open = ref(false)
    const setOpenTo = (val: boolean) => {
        open.value = val
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
        `/src/assets/images/image-product-1.jpg`,
        `/src/assets/images/image-product-2.jpg`,
        `/src/assets/images/image-product-3.jpg`,
        `/src/assets/images/image-product-4.jpg`,
    ])

    return {
        activeImg,
        swapImg,
        images,
        open,
        setOpenTo,
    }
})()