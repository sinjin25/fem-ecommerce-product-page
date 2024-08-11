<template>
    <Teleport to="body">
        <div class="lightbox-overlay d-flex jc-c ai-c" v-if="ul.open.value">
            <div class="lightbox d-flex">
                <div class="lightbox-close pb-24">
                    <div class="px-10 py-10 clickable" @click="ul.setOpenTo(false)">
                        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                                fill-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div class="lightbox-main mb-40">
                    <div class="lightbox-controls d-flex jc-sb ai-c">
                        <Next @click="ul.swapImg(ul.activeImg.value - 1)"></Next>
                        <Next @click="ul.swapImg(ul.activeImg.value + 1)"></Next>
                    </div>
                    <img :src="ul.images.value[ul.activeImg.value]">
                </div>
                <div class="lightbox-carousel d-none d-lg-flex">
                    <div class="lightbox-carousel-item clickable" v-for="(_, index) in ul.images.value" :key="index"
                        @click="ul.swapImg(index)" :class="ul.activeImg.value === index ? '--active' : ''">
                        <img :src="ul.images.value[index]" alt="">
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import Next from './Next.vue';
import useLightbox from '@/composables/use-lightbox';

const ul = useLightbox
</script>

<style lang="scss" scoped>
.lightbox {
    z-index: 3;
    position: absolute;
    flex-direction: column;

    &-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, .75);
        z-index: 2;
    }

    &-main {
        height: 550px;
        width: 550px;
        border-radius: 15px;
        position: relative; // for lightbox-controls

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: inherit;
        }
    }

    &-close {
        fill: var(--white);
        text-align: right;

        &:hover {
            fill: var(--orange);
        }
    }

    &-controls {
        position: absolute;
        top: 0;
        bottom: 0;
        left: calc(56px / -2);
        right: calc(56px / -2);

        &>* {
            height: 56px;
            width: 56px;
        }

        &>*:nth-child(1) {
            transform: rotate(180deg);
        }
    }
}

// copied from ProductImage product-carousel
.lightbox {
    &-carousel {

        justify-content: center;
        gap: 31px;

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