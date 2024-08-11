import { ref } from 'vue'

export default (() => {
    const opened = ref(false)

    const setOpened = (val: boolean) => {
        opened.value = val
    }

    return {
        opened,
        setOpened,
    }
})()