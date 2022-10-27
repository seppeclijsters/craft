<script setup>
const { currentPage } = usePageData()
</script>

<template>
    <div class="site-header__big-title">
        <div v-html="currentPage.headerIntro"></div>
        <Button v-if="currentPage.headerButton?.url" :url="currentPage.headerButton.url" :style="'white'"
            :text="currentPage.headerButton.customText ?? currentPage.headerButton.text"></Button>
    </div>
</template>