<script setup>
const { getPageData } = usePageData()

onMounted(() => {
    getPageData('job')
})
</script>

<template>
    <div class="page-job">
        <JobPage />
    </div>
</template>