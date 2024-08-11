<template>
    <div>
        <div class="product-price-total d-flex ai-c mb-20 mb-26 mb-lg-32 fw-700">
            <div class="product-price-total">$125.00</div>
            <div>50%</div>
            <div class="product-price-final ml-auto">$250</div>
        </div>
        <div class="product-price-group d-flex">
            <div class="product-price-quantity d-flex ai-c fw-700">
                <div class="product-price-quant-btn clickable d-flex ai-c jc-c py-15 px-24 px-lg-10"
                    @click="changeQuantity(-1)">
                    <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <path
                                d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                                id="a" />
                        </defs>
                        <use fill-rule="nonzero" xlink:href="#a" />
                    </svg>
                </div>
                <div>{{ quantity }}</div>
                <div class="product-price-quant-btn clickable d-flex ai-c jc-c py-15 px-24 px-lg-10"
                    @click="changeQuantity(1)">
                    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <path
                                d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                                id="b" />
                        </defs>
                        <use fill-rule="nonzero" xlink:href="#b" />
                    </svg>
                </div>
            </div>
            <div class="product-price-btn d-flex ai-c jc-c clickable" @click="addToCart">
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                        fill-rule="nonzero" />
                </svg>
                <div class="fw-700">Add to cart</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useCart from '@/composables/use-cart';

const quantity = ref(1)
const changeQuantity = (val: number) => {
    if (quantity.value + val >= 1) {
        quantity.value += val
    }
}

const addToCart = () => {
    useCart.addItem({
        name: 'Fall Limited Edition Sneakers',
        price: 125.00,
        quantity: quantity.value,
    })

    console.log('cart', useCart.items.value)
}
</script>

<style lang="scss" scoped>
.product-price {
    &-total {
        flex-wrap: wrap;
        gap: 16px;

        @media only screen and (min-width: 768px) {
            // scuffed version of horizontal gap 16, vertical gap 10
            // maybe try grid next time
            gap: 10px;

            &>*:nth-child(1) {
                padding-right: 6;
            }
        }

        &>*:nth-child(1) {
            font-size: 28px;
        }

        &>*:nth-child(2) {
            font-size: 16px;
            color: var(--white);
            background: var(--very-dark-blue);
            padding: 4px 10px;
            border-radius: 6px;
        }

        &>*:nth-child(3) {
            font-size: 16px;
            color: var(--dark-grayish-blue);
            text-decoration: line-through;
            text-decoration-color: var(--dark-grayish-blue);
        }
    }

    @media only screen and (min-width: 768px) {
        &-final {
            min-width: 100%;
        }
    }

    &-group {
        flex-direction: column;
        gap: 20px;

        @media only screen and (min-width: 768px) {
            flex-direction: row;
            gap: 16px;

            &>*:nth-child(1) {
                flex: 0 0 156px;
            }

            &>*:nth-child(2) {
                flex: 1 1 auto;
            }
        }
    }

    &-quantity {
        height: 56px;
        justify-content: space-between;
        background: #F6F8FD;
        border-radius: 10px;
    }

    &-quant-btn {
        fill: var(--orange);

        &:hover {
            fill: #FFAB6A;
        }
    }

    &-btn {
        height: 56px;
        gap: 15px;
        background: var(--orange);
        border-radius: 10px;
        box-shadow: 0 20px 50px -20px var(--orange);

        &:hover {
            background: #FFAB6A;
        }
    }
}
</style>