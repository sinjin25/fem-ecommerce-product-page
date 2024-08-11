<template>
    <div class="product-btn clickable">
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path d="m2 1 8 8-8 8" stroke-width="3" fill="none" fill-rule="evenodd" />
        </svg>
    </div>
</template>

<style lang="scss" scoped>
.product {
    &-btn {
        --size: 40px;
        height: var(--size);
        width: var(--size);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        background: var(--white);

        stroke: var(--very-dark-blue);

        &:hover {
            stroke: var(--orange);
        }
    }
}
</style>