import { ref } from "vue"

export default (() => {
    const LOCK_CLASS_NAME = '--scroll-lock'

    const findBody = () => {
        const bodyArr = document.getElementsByTagName('body')
        return bodyArr
    }

    const lock = () => {
        const arr = findBody()
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]) {
                arr[i].classList.add(LOCK_CLASS_NAME)
            }
        }
    }

    const unlock = () => {
        const arr = findBody()
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]) {
                arr[i].classList.remove(LOCK_CLASS_NAME)
            }
        }
    }

    // prevent locking out screen by changing sizes
    window.addEventListener('resize', () => {
        unlock()
    })

    return {
        lock,
        unlock
    }
})()