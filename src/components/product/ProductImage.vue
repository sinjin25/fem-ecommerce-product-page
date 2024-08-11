<template>
    <div class="product">
        <div class="product-wrapper">
            <!-- TODO: preload images -->
            <div class="product-controls px-16 d-flex jc-sb ai-c d-lg-none">
                <Next @click="swapImg(activeImg - 1)"></Next>
                <Next @click="swapImg(activeImg + 1)"></Next>
            </div>
            <div class="product-img mb-lg-32 clickable" @click="openLightbox(activeImg)"><img :src="images[activeImg]">
            </div>

        </div>
        <!-- DESKTOP: carousel -->
        <div class="product-carousel d-none d-lg-flex">
            <div class="product-carousel-item clickable" v-for="(_, index) in images" :key="index"
                @click="swapImg(index)" :class="activeImg === index ? '--active' : ''">
                <img :src="images[index]" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Next from './Next.vue'
import useLightbox from '@/composables/use-lightbox';

const ul = useLightbox

const openLightbox = (activeImgIndex: number) => {

    if (window.innerWidth < 768) return
    ul.setOpenTo(true)
    ul.swapImg(activeImgIndex)
}

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

    @media only screen and (min-width: 768px) {
        max-width: 445px;
    }

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

        >*:nth-child(1) {
            transform: rotate(180deg);
        }
    }

    &-img {
        height: 300px;
        width: 375px;

        @media only screen and (min-width: 768px) {
            border-radius: 15px;
            width: 445px;
            height: 445px;
        }

        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
            border-radius: inherit;
        }
    }

    &-carousel {

        justify-content: space-between;

        &-item {
            position: relative;

            width: 88px;
            height: 88px;

            border-radius: 10px;
            overflow: hidden;

            border: 2px solid var(--white);

            &.--active {
                border-color: var(--orange);
            }

            &::after {
                position: absolute;
                inset: 0;
                content: "";
                background: transparent;
            }

            &:hover::after {
                background: rgba(255, 255, 255, .75);
            }

            img {
                object-fit: cover;
                width: 100%;
            }
        }
    }
}
</style>