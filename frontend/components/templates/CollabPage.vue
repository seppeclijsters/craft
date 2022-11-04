<script setup>
const { currentPage } = usePageData()
const { urlLink } = useHelpers()
</script>

<template>
    <div v-if="currentPage">
        <Header></Header>
        <div class="intro g-mb">
            <div class="intro__inner-wrapper">
                <h1 class="title">{{ currentPage.headerTitle ?? currentPage.title }}</h1>
                <p v-if="currentPage.headerSubtitle" class="subtitle">{{ currentPage.headerSubtitle }}</p>
                <div v-if="currentPage.headerIntro" v-html="currentPage.headerIntro"></div>
            </div>
        </div>
        <div v-if="currentPage.details" class="details g-mb">
            <div class="details__image">
                <img :src="currentPage.details[0]?.image[0]?.url" :alt="currentPage.details[0]?.image[0]?.alt">
            </div>
            <div class="details__text">
                <div v-if="currentPage.details[0].text" class="text" v-html="currentPage.details[0].text"></div>
                <hr />
                <div class="companies">
                    <p>Digital Phanatics:</p>
                    <ul class="companies__inner-wrapper">
                        <li v-for="{ id, title, website } in currentPage.details[0].companies" :key="id">
                            <NuxtLink :to="website.url" target="_blank">
                                {{ title }}
                            </NuxtLink>
                        </li>
                    </ul>
                    <Button v-if="currentPage.details[0].linkIt?.url" :url="urlLink(currentPage.details[0].linkIt.url)"
                        :style="'primary'"
                        :text="currentPage.details[0].linkIt.customText ?? currentPage.details[0].linkIt.text"></Button>
                </div>
            </div>

        </div>
        <ContentGrid v-if="currentPage.contentGrid?.length" :blocks="currentPage.contentGrid" />
    </div>
</template>