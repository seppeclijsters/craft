<script setup>
const { currentPage, getPageData } = usePageData()
const { setPageSeo } = useSeo()

onMounted(async () => {
    await getPageData()
    setPageSeo(currentPage.value.seomatic)
})
</script>

<template>
    <div>
        <CollabList v-if="currentPage.typeHandle === 'collabList'" />
        <DefaultPage v-else />

    </div>
</template>