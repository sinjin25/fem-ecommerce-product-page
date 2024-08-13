<script setup lang="ts">
</script>

<template>
    <div class="correction">
        <MainWrapper></MainWrapper>
    </div>
</template>

<script setup lang="ts">
import MainWrapper from './components/MainWrapper.vue'

</script>

<style lang="scss" scoped>
.correction {
    @media only screen and (max-width: 767px) {
        display: flex;
        min-height: 100vh;
        justify-content: center;
        align-items: center;
    }

}
</style>