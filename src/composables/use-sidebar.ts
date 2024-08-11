import { ref } from 'vue'
import useLockScroll from './use-lock-scroll'

export default (() => {
    const opened = ref(false)

    const setOpened = (val: boolean) => {
        opened.value = val
        if (opened.value === true) {
            useLockScroll.lock()
        } else {
            useLockScroll.unlock()
        }
    }

    return {
        opened,
        setOpened,
    }
})()