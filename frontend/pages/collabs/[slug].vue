<script setup>
const { getPageData } = usePageData()

onMounted(() => {
    getPageData('collab')
})
</script>

<template>
    <div class="page-collab">
        <CollabPage></CollabPage>
    </div>
</template>
