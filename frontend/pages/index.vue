<script setup>
const { currentPage, getPageData } = await usePageData()

onMounted(async () => {
    await getPageData()
    // setPageSeo(currentPage.value.seomatic)
})

// const route = useRoute()

// /* Check if preview */
// let headers = {};
// const { token } = route.query;
// if (token !== undefined) {
//     headers = {
//         "x-Craft-Token": token ? `${token}` : "",
//     };
// }
// useGqlHeaders(headers)

/* Get page */
// const { data: page } = await useAsyncData(`page-home`, () => GqlGetHomePage())
</script>

<template>
    <div v-if="currentPage">
         <h1>{{ currentPage.entries[0].title }}</h1>
        <div v-if="currentPage.entries[0]">
            <ContentGrid  :blocks="currentPage.entries[0].contentGrid" />
        </div>
    </div>
</template>