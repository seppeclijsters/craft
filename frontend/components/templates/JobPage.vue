<script setup>
import IconMapPin from "@/assets/icons/icon-map-pin.svg"
import ContentGrid1 from "../organisms/ContentGrid.vue";

const { currentPage } = usePageData()
</script>

<template>
    <div v-if="currentPage">
        <div v-if="currentPage.jobInfo" class="intro g-mb">
            <div class="intro__inner-wrapper">
                <h2 class="job-info-heading">{{ currentPage.jobInfo[0]?.heading }}</h2>
                <div v-if="currentPage.jobInfo[0]?.text" class="job-info-text" v-html="currentPage.jobInfo[0].text">
                </div>
                <div v-if="currentPage.jobInfo[0]?.offices?.length" class="job-info-offices">
                    <IconMapPin />
                    <ul class="job-info-offices__inner-wrapper">
                        <li v-for="{ id, title, gMapsUrl } in currentPage.jobInfo[0]?.offices" :key="id" class="office">
                            <NuxtLink :to="gMapsUrl.url" target="_blank">{{ title }}</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div v-if="currentPage.jobInfo" class="skills g-mb">
            <div class="skills__image">
                <div v-if="currentPage.jobInfo[0]?.image?.length" class="image-wrapper">
                    <img :src="currentPage.jobInfo[0].image[0].url" :alt="currentPage.jobInfo[0].image[0].alt">
                </div>
            </div>
            <div class="skills__wrapper">
                <div class="heading">
                    <h2>
                        Heb je <br />
                        <span class="text-primary">kennis</span> van
                    </h2>
                </div>
                <div v-if="currentPage.jobInfo[0]?.skills" class="all-skills">
                    <div v-for="({ skillName, skillLevel }, index) in currentPage.jobInfo[0].skills" class="skill"
                        :key="index">
                        <p>{{ skillName }}</p>
                        <div class="skill__balls" v-for="index in 5" :key="index">
                            <span :class="['ball', { 'ball--active': index <= + skillLevel }]"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ContentGrid v-if="currentPage.contentGrid?.length" :blocks="currentPage.contentGrid" />
    </div>
</template>
