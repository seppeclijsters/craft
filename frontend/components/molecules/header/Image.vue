<script setup>
const { currentPage } = usePageData()
</script>

<template>
    <div class="site-header__big-image">
        <div class="image-wrapper">
            <img :src="currentPage.headerImage[0].url" :alt="currentPage.headerImage[0].alt">
        </div>
    </div>
</template>