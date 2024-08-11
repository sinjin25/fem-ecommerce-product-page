import { ref, computed } from "vue";

export type CartItem = {
    name: string,
    price: number,
    quantity: number,
}

// singleton composable
export default (() => {
    const cartOpened = ref(false)
    const items = ref<CartItem[]>([])

    const addItem = (item: CartItem) => {
        const found = items.value.find((anItem) => anItem.name === item.name)
        if (!found) {
            items.value.push({ ...item })
            return
        }
        found.quantity = item.quantity
    }

    const removeItem = (itemName: string) => {
        const index = items.value.findIndex(({ name }) => name === itemName)
        if (index === -1) {
            throw Error(`Could not find remove item with name ${itemName}`)
        }
        items.value.splice(index, 1)
    }

    const itemsInCart = computed(() => {
        if (items.value.length === 0) return 0
        return items.value.reduce((acc, cv) => {
            return acc + cv.quantity
        }, 0)
    })

    return {
        items,
        addItem,
        cartOpened,
        removeItem,
        itemsInCart,
    }
})()