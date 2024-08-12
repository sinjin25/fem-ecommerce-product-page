<template>
    <div class="cart-overlay" @click="closeCart">
        <div class="cart" @click.stop>
            <div class="cart-title px-24 py-24 fw-700">Cart</div>
            <template v-if="useCart.items.value.length === 0">
                <div class="cart-no-items d-flex ai-c jc-c">
                    <div class="fw-700">Your cart is empty</div>
                </div>
            </template>
            <template v-else>
                <div class="px-24 pt-24">
                    <div v-for="(item, index) in useCart.items.value" :key="index" class="cart-item d-flex ai-c">
                        <img class="cart-item-thumb" src="/assets/images/image-product-1-thumbnail.jpg">
                        <div class="cart-item-body">
                            <div class="cart-item-title">{{ item.name }}</div>
                            <div>{{ (item.price).toFixed(2) }} x {{ item.quantity }} <span
                                    class="cart-item-price fw-700">${{
                                        (item.price * item.quantity).toFixed(2) }}</span></div>
                        </div>
                        <!-- trash icon -->
                        <svg class="py-15 clickable" @click="useCart.removeItem(item.name)" width="14" height="16"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <path
                                    d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                                    id="a" />
                            </defs>
                            <use fill-rule="nonzero" xlink:href="#a" />
                        </svg>
                    </div>
                </div>
                <div class="px-24 pt-24 pb-32">
                    <div class="cart-checkout d-flex ai-c jc-c fw-700 clickable">Checkout</div>
                </div>
            </template>

        </div>
    </div>
</template>

<script setup lang="ts">
import useCart from '@/composables/use-cart';

const closeCart = () => {
    useCart.cartOpened.value = false
}
</script>

<style lang="scss" scoped>
// TODO: move out cart and menu
svg.clickable {
    fill: #C3CAD9;

    &:hover {
        fill: var(--orange);
    }
}

.cart {
    // position
    position: absolute;
    top: 76px;
    left: 8px;
    right: 8px;
    z-index: 2;
    min-width: 360px;
    min-height: 256px;

    border-radius: 10px;
    background: var(--white);


    // flex for min size
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
        top: 94px;
        /// should've just had cart relatively positioned and based the expanded cart on the icon
        right: 90px;
        bottom: unset;
        left: unset;
        width: 360px;
        min-height: 256px;

        box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, .5);
    }

    @media only screen and (min-width: 1300px) {
        // bandaid for centering on the cart icon
        right: calc(50vw - 555px + 60px - 180px);
    }

    >*:nth-child(1) {
        flex: 0 0 auto;
    }

    >*:nth-child(2) {
        flex: 1 0 auto;
    }

    &-overlay {
        z-index: 2;
        position: absolute;
        inset: 0;
    }

    &-title {
        line-height: 26px;
        border-bottom: 1px solid #E4E9F2;
    }

    &-item {
        color: var(--dark-grayish-blue);
        gap: 16px;

        &-thumb {
            --size: 50px;
            height: var(--size);
            width: var(--size);

            border-radius: 4px;
        }

        &-title {
            line-height: 26px;
        }

        &-price {
            color: var(--very-dark-blue);
        }
    }

    &-checkout {
        background: var(--orange);
        color: var(--very-dark-blue);
        height: 56px;
        border-radius: 10px;

        &:hover {
            background: #FFAB6A;
        }
    }

    &-no-items {
        color: var(--dark-grayish-blue);
    }
}
</style>