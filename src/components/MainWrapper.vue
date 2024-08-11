<template>
    <div class="main">
        <HeaderBar></HeaderBar>
        <div>
            <ProductImage class="pb-24"></ProductImage>
            <ProductInfo class="px-24 pb-24"></ProductInfo>
            <ProductPrice class="px-24 pb-16"></ProductPrice>
        </div>
    </div>
</template>

<script lang="ts" setup>
import HeaderBar from './header/HeaderBar.vue'
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

    background: white;
}

/* .product {
    &-info, &-price {
        padding: 24px;
    }
} */
</style>