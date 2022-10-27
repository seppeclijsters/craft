<script setup>
const { currentPage } = usePageData()
const { urlLink } = useHelpers()
</script>

<template>
    <div class="site-header__job-title">
        <h1>{{ currentPage.title }}</h1>
        <Button v-if="currentPage.headerButton?.url" :url="urlLink(currentPage.headerButton.url)" :style="'primary'"
            :text="currentPage.headerButton.customText ?? currentPage.headerButton.text"></Button>
    </div>
</template>