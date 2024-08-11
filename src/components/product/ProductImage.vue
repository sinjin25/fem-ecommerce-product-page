<template>
    <div class="product-wrapper">
        <!-- TODO: preload images -->
        <div class="product-controls">
            <Next @click="swapImg(activeImg - 1)"></Next>
            <Next @click="swapImg(activeImg + 1)"></Next>
        </div>
        <img class="product-img" :src="images[activeImg]">
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Next from './Next.vue'

const images = ref([
    `/src/assets/images/image-product-1.jpg`,
    `/src/assets/images/image-product-2.jpg`,
    `/src/assets/images/image-product-3.jpg`,
    `/src/assets/images/image-product-4.jpg`,
])
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
</script>

<style lang="scss" scoped>
.product {
    &-wrapper {
        display: flex;
        position: relative;
    }

    &-controls {
        position: absolute;

        // center
        top: 50%;
        left: 0;
        right: 0;
        transform: translateY(-50%);

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 16px;

        >*:nth-child(1) {
            transform: rotate(180deg);
        }
    }

    &-img {
        width: 100%;
        height: 375px;
    }
}
</style>