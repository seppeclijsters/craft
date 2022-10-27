<script setup>
const { currentPage, getPageData } = usePageData()
const { setPageSeo } = useSeo()

onMounted(async () => {
    await getPageData()
    setPageSeo(currentPage.value.seomatic)
})
</script>

<template>
    <CollabList v-if="currentPage.typeHandle === 'collabList'" />
    <DefaultPage v-else />
</template>