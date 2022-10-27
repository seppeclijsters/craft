<script setup>
const { currentPage } = usePageData()
</script>

<template>
    <div class="site-header__header-image">
        <img :src="currentPage.headerImage[0].url" alt="">
    </div>
    <div class="site-header__header-title">
        <h1>{{ currentPage.headerTitle ?? currentPage.title }}</h1>
    </div>
    <div v-html="currentPage.headerIntro" class="site-header__header-text"></div>
</template>