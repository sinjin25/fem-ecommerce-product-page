<template>
    <div class="menu-overlay" @click="us.setOpened(false)">
        <div class="menu" @click.stop>
            <!-- close btn-->
            <svg class="menu-close clickable" width="14" height="15" xmlns="http://www.w3.org/2000/svg"
                @click="us.setOpened(false)">
                <path
                    d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                    fill-rule="evenodd" />
            </svg>
            <div class="menu-items fw-700">
                <div class="menu-item">Collections</div>
                <div class="menu-item">Men</div>
                <div class="menu-item">Women</div>
                <div class="menu-item">About</div>
                <div class="menu-item">Contact</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import useSidebar from '@/composables/use-sidebar';

const us = useSidebar
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 768px) {

    .menu,
    .menu-overlay {
        display: none;
    }
}

.menu {
    background: var(--white);
    padding: 25px;
    height: 100%;
    width: 250px;

    &-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, .70);
    }

    &-close {
        margin-bottom: 54px;
        fill: var(--dark-grayish-blue);

        &:hover {
            fill: var(--orange);
        }
    }

    &-items {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    &-item {
        font-size: 18px;
        line-height: 26px;
    }
}
</style>