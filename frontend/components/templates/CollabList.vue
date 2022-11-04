<script setup>
const {
    currentPage,
    collabs,
    getCollabs
} = usePageData()
const { urlLink } = useHelpers()

onMounted(() => {
    getCollabs()
})
</script>

<template>
    <div class="page-collab-list" v-if="currentPage">
        <Header></Header>
        <div class="page-collab-list__intro g-mb">
            <div class="content">
                <div v-html="currentPage.collabs[0].intro" class="content__intro-text g-mb"></div>
                <div class="content__grid">
                    <div class="block block--text">
                        <div v-if="currentPage.collabs[0].text" class="block__text"
                            v-html="currentPage.collabs[0].text"></div>
                        <Button v-if="currentPage.collabs[0].linkIt?.url" :url="currentPage.collabs[0].linkIt.url"
                            :style="'primary'"
                            :text="currentPage.collabs[0].linkIt.customText ?? currentPage.collabs[0].linkIt.text"></Button>
                    </div>
                    <div v-if="collabs">
                        <NuxtLink v-for="{ id, url, snippetImage, snippetButtonText } in collabs" :key="id"
                            :to="urlLink(url)" class="block block--collab">
                            <img class="block__image" :src="snippetImage[0].url" :alt="snippetImage[0].alt">
                            <p v-if="snippetButtonText" class="block__text">{{ snippetButtonText }}</p>
                            <p>lees meer</p>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <ContentGrid v-if="currentPage.contentGrid?.length" :blocks="currentPage.contentGrid">
        </ContentGrid>
    </div>
</template>