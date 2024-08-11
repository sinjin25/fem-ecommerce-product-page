<template>
    <div class="main">
        <Lightbox></Lightbox>
        <div class="main-inner">
            <HeaderBar></HeaderBar>
        </div>
        <div class="main-inner main-body d-flex jc-c">
            <ProductImage></ProductImage>
            <div>
                <ProductInfo class="px-24 pb-24 px-lg-0 pt-lg-62 pb-lg-24"></ProductInfo>
                <ProductPrice class="px-24 pb-16 px-lg-0"></ProductPrice>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import HeaderBar from './header/HeaderBar.vue'
import Lightbox from './product/Lightbox.vue';
import ProductImage from './product/ProductImage.vue'
import ProductInfo from './product/ProductInfo.vue';
import ProductPrice from './product/ProductPrice.vue';
</script>

<style lang="scss" scoped>
.main {
    position: relative;

    --mobile-w: 375px;
    --mobile-h: 900px;

    width: var(--mobile-w);
    height: var(--mobile-h);

    background: var(--white);

    @media only screen and (min-width: 768px) {
        width: 100%;
        height: unset;
    }

    &-inner {
        @media only screen and (min-width: 768px) {
            max-width: 1110px;
            margin-left: auto;
            margin-right: auto;
        }
    }

    &-body {
        flex-direction: column;
        gap: 24px;

        @media only screen and (min-width: 768px) {
            flex-direction: row;
            gap: 125px;

            >*:nth-child(1) {
                flex: 0 1 450px;
            }

            >*:nth-child(2) {
                flex: 0 1 445px
            }
        }
    }
}
</style>