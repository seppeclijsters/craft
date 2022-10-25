<script setup>
// const route = useRoute()

// /* Check if preview */
// let headers = {};
// const { token } = route.query;
// if (token !== undefined) {
//     headers = {
//         "x-Craft-Token": token ? `${token}` : "",
//     };
//     useGqlHeaders(headers)
// }

const { getPageData, currentPage } = await usePageData()
// const { setPageSeo } = useSeo()
// const ola = useState('currentPage')
onMounted(async () => {
    await getPageData()
    // setPageSeo(currentPage.value.seomatic)
})

/* Get page */
// const pageUri = route.params.slug.join('/')
// const { data: page } = await useAsyncData(`page-${pageUri}`, () => GqlGetPage({ uri: pageUri }))
</script>

<template>
    <div v-if="currentPage">
        <!-- <h2 class="p-8 text-center"> {{ currentPage.data.entries[0].title}}</h2> -->
        <!-- <pre>
            {{ ola }}
        </pre> -->
        <pre>
            {{ currentPage}}
        </pre>
        <p>Dit is een andere pagina dan homepage</p>
    </div>
</template>