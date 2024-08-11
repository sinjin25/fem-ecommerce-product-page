<template>
    <div class="product-info">
        <div class="product-info-producer pb-15">SNEAKER COMPANY</div>
        <div class="product-info-title pb-15">Fall Limited Edition Sneakers</div>
        <div class="product-info-desc">These low-profile sneakers are your perfect casual wear companion. Featuring a
            durable rubber outer sole,
            they’ll withstand everything the weather can offer.</div>
    </div>
</template>

<style lang="scss">
.product-info {
    &-producer {
        color: var(--dark-grayish-blue);
        font-weight: 700;
        font-size: 12px;
        letter-spacing: 1.85px;
        line-height: 15px;
    }

    &-title {
        color: var(--very-dark-blue);
        font-size: 28px;
        font-weight: 700;
        line-height: calc(28px + 4px);
    }

    &-desc {
        color: var(--dark-grayish-blue);
        font-size: 15px;
    }
}
</style>