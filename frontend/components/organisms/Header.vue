<script setup>
import IconLogoWhite from '@/assets/icons/icon-logo-white.svg'
import IconSearch from '@/assets/icons/icon-search.svg'

const config = useRuntimeConfig()
const route = useRoute()

const {
    mainMenuItems,
    currentPage,
    getMainMenuItems
} = usePageData()

onMounted(() => {
    getMainMenuItems()
})
</script>

<template>
    <header class="site-header g-mb">
        <div v-if="currentPage.headerBgImage?.length" class="site-header__bg-image">
            <img :src="currentPage.headerBgImage[0].url" :alt="currentPage.headerBgImage[0].alt">
        </div>
        <div class="site-header__masthead">
            <NuxtLink to="/">
                <IconLogoWhite class="logo"></IconLogoWhite>
            </NuxtLink>
            <div class="nav">
                <nav class="nav__menu">
                    <li v-for="{ title, uri, uid } in mainMenuItems.entries" :key="uid">
                        <NuxtLink :to="'/' + uri">
                            {{ title }}
                        </NuxtLink>
                    </li>
                </nav>
                <IconSearch></IconSearch>
            </div>
        </div>
        <header-form v-if="currentPage.sectionHandle === 'pages' && currentPage.headerForm?.length" />
        <header-normal v-else-if="currentPage.sectionHandle === 'pages' && currentPage.headerImage?.length" />
        <header-title v-else-if="currentPage.sectionHandle === 'pages' && currentPage.headerIntro" />
        <div v-else></div>
        <header-image
            v-if="(currentPage.typeHandle === 'contactPage' || currentPage.typeHandle === 'collab') && currentPage.headerImage?.length" />
        <header-job v-if="currentPage.typeHandle === 'job'" />
    </header>
</template>