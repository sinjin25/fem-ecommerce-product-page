<template>
    <div class="top">
        <!-- modal -->
        <Teleport to="body">
            <SideBar v-if="useSidebar.opened.value"></SideBar>
        </Teleport>
        <Cart v-if="useCart.cartOpened.value"></Cart>
        <div class="top-left">
            <HeaderLeft></HeaderLeft>
        </div>
        <div class="top-right">
            <div class="top-cart-quantity d-flex jc-c ai-c">
                <div v-if="useCart.itemsInCart.value > 0" class="top-cart-quantity-bubble">
                    {{ useCart.itemsInCart.value }}
                </div>
                <svg class="clickable" width="22" height="20" xmlns="http://www.w3.org/2000/svg" @click="openCart">
                    <path
                        d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                        fill="#69707D" fill-rule="nonzero" />
                </svg>
            </div>
            <img class="top-avatar clickable" src="/assets/images/image-avatar.png" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import useCart from '@/composables/use-cart';
import useSidebar from '@/composables/use-sidebar';
import Cart from './Cart.vue'

import { computed, ref } from 'vue';
import SideBar from './SideBar.vue';
import HeaderLeft from './HeaderLeft.vue';

const openCart = () => {
    useCart.cartOpened.value = true
}
</script>

<style lang="scss" scoped>
.top {
    display: flex;
    justify-content: space-between;

    padding: 20px 24px 24px 24px;

    @media only screen and (min-width: 768px) {
        max-width: 1110px;
        border-bottom: 1px solid #E4E9F2;
        padding-top: 41px;
        padding-bottom: 45px;
        margin-bottom: 90px;
    }

    &-left {
        display: flex;
        gap: 16px;
        align-items: center;
    }

    &-right {
        display: flex;
        gap: 22px;
        align-items: center;

        @media only screen and (min-width: 768px) {
            gap: 16px;
        }
    }

    &-avatar {
        width: 24px;
        height: 24px;
    }

    &-cart-quantity {
        position: relative;

        &-bubble {
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(50%, -50%);

            font-size: 10px;
            line-height: 1;
            padding: 1.5px 6px;
            color: var(--white);
            background: var(--orange);
            border-radius: 6.5px;
        }

    }
}
</style>