<script setup>
const { currentPage } = usePageData()
</script>

<template>
    <div>
        <div class="fixed w-40 h-40 rounded-full blur-lg bg-red-700 animate-pulse pointer-events-none z-10 scale-[1.5] -top-20 -right-20"></div>
        <div class="fixed w-40 h-40 rounded-full blur-lg bg-red-700 animate-pulse pointer-events-none z-10 scale-[1.25] top-1/3 -left-28"></div>
        <Header></Header>
        <div class="page-default" v-if="currentPage">
            <ContentGrid v-if="currentPage.contentGrid?.length" :blocks="currentPage.contentGrid">
            </ContentGrid>
        </div>

    </div>
</template>