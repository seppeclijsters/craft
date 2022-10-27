<script setup>
const { currentPage } = usePageData()
</script>

<template>
    <div class="page-default" v-if="currentPage">
        <ContentGrid v-if="currentPage.contentGrid?.length" :blocks="currentPage.contentGrid">
        </ContentGrid>
    </div>
</template>