<script setup>
import IconLogoPink from '@/assets/icons/icon-logo-pink.svg'

const {
    footerMenuItems,
    footerText,
    footerCta,
    socials,
    bottomMenuItems,
    getFooterMenuItems,
    getFooterText,
    getFooterCta,
    getSocials,
    getBottomMenuItems
} = usePageData()

const filterSocials = (socialsData) => {
    const filteredData = []
    const metaSiteVarsContainer = JSON.parse(socialsData.seomatic.metaSiteVarsContainer)
    const platforms = Object.keys(metaSiteVarsContainer.sameAsLinks)
    platforms.forEach((platform) => {
        if (metaSiteVarsContainer.sameAsLinks[platform].url) {
            filteredData.push(metaSiteVarsContainer.sameAsLinks[platform])
        }
    })
    return filteredData
}

onMounted(() => {
    getFooterMenuItems()
    getFooterText()
    getFooterCta()
    getSocials()
    getBottomMenuItems()
})
</script>   

<template>
    <footer>
        <div class="site-footer">
            <div class="site-footer__company">
                <IconLogoPink></IconLogoPink>
                <p v-if="footerText.globalSet?.text">{{ footerText.globalSet?.text }}</p>
            </div>
            <ul class="site-footer__menu">
                <li v-for="{ id, uri, title } in footerMenuItems.entries" :key="id">
                    <NuxtLink :to="uri">{{ title }}</NuxtLink>
                </li>
            </ul>
            <div class="site-footer__cta">
                <p v-if="footerCta.globalSet?.footerGrid[0].text">{{ footerCta.globalSet?.footerGrid[0].text }}</p>
                <Button v-if="footerCta.globalSet?.footerGrid[0].button.url"
                    :url="footerCta.globalSet?.footerGrid[0].button.url" :style="'white'" :text="footerCta.globalSet?.footerGrid[0].button.customText ??
                    footerCta.globalSet?.footerGrid[0].button.text"></Button>
            </div>
            <ul v-if="socials" class="site-footer__socials">

                <li v-for="({ siteName, url }, index) in filterSocials(socials)" :key="index">
                    <NuxtLink v-if="url" :to="url">{{ siteName }}</NuxtLink>
                </li>
            </ul>
        </div>
        <div class="bottom-menu">
            <div class="bottom-menu__inner-wrapper">
                <p>Made in collaboration with Sidekick & Appeel.io</p>
                <ul v-if="bottomMenuItems" class="menu">
                    <li v-for="{ id, uri, title } in bottomMenuItems.entries" :key="id">
                        <NuxtLink :to="uri">{{ title }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>