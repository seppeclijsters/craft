<script setup>
// import ContentGrid from "../../components/ContentGrid.vue";
const { getPageData, currentJob, currentPage } = await usePageData()

onMounted(async () => {
    await getPageData('job')
    console.log('onmounted')
})



const route = useRoute()

console.log('route is:'  + route.params.slug)

</script>

<template>
    <div>
        <h2>...slug</h2>
        <div v-if="currentPage">
            {{ currentPage }}
        </div>
        <div class="page-job">
            <div  v-if="currentPage.entries.length" class="intro g-mb">
                <pre>
                    {{ currentPage.entries}}
                </pre>
                <div v-if="currentJob.entries.length">
                <div class="bg-dark">
                    <h1 class="text-white text-center py-40" v-if="currentJob.entries[0].title">{{ currentJob.entries[0].title }}</h1>
                </div>
                <div class="container">
                    <div class="py-8" v-html="currentJob.entries[0].jobInfo[0].text"></div>
                    <div v-if="currentJob.entries[0].articleGrid">
                        <div v-for="block in currentJob.entries[0].articleGrid" :key="block.id">
                            <div v-if="block.typeHandle === 'heading'">
                                <h2>{{ block.heading }}</h2>
                            </div>
                            <div v-if="block.typeHandle === 'text'">
                                <h2 v-if="block.heading">{{ block.heading }}</h2>
                                <div class="rte" v-html="block.text"></div>
                            </div>
                            <div v-if="block.typeHandle === 'textAndImage'">
                                <div class="flex">
                                    <div>
                                        <h2 v-if="block.heading">{{ block.heading }}</h2>
                                        <div class="rte" v-html="block.text"></div>
                                    </div>
                                    <img :src="block.image[0].url" alt="">
                                </div>
                            </div>
                            <div v-if="block.typeHandle === 'images' && block.images.length">
                                <img class="w-full" v-for="image in block.images" :key="image.id" :src="image.url" alt="123">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
               
                <div class="intro__inner-wrapper">
                    <h2 class="job-info-heading">{{ currentPage.entries[0].jobInfo[0]?.heading }}</h2>
                    <div v-if="currentPage.entries[0].jobInfo[0]?.text" class="job-info-text" v-html="currentPage.entries[0].jobInfo[0].text">
                    </div>
                    <div v-if="currentPage.entries[0].jobInfo[0]?.offices?.length" class="job-info-offices">
                        
                    </div>
                </div>
            </div>
            <div v-if="currentPage.entries.length" class="skills g-mb">
                <div class="skills__image">
                    <div v-if="currentPage.entries[0].jobInfo[0]?.image?.length" class="image-wrapper">
                        <img :src="currentPage.entries[0].jobInfo[0].image[0].url" :alt="currentPage.entries[0].jobInfo[0].image[0].alt">
                    </div>
                </div>
                <div class="skills__wrapper">
                    <div class="heading">
                        <h2>
                            Heb je <br />
                            <span class="text-primary">kennis</span> van
                        </h2>
                    </div>
                    <div v-if="currentPage.entries[0].jobInfo[0]?.skills" class="all-skills">
                        <div v-for="({ skillName, skillLevel }, index) in currentPage.entries[0].jobInfo[0].skills" class="skill"
                            :key="index">
                            <p>{{ skillName }}</p>
                            <div class="skill__balls" v-for="index in 5" :key="index">
                                <span :class="['ball', { 'ball--active': index <= + skillLevel }]"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div v-if="currentPage.entries[0]">
                <ContentGrid  :blocks="currentPage.entries[0].contentGrid" />
            </div>
    
        </div>

    </div>
</template>

<style scoped>



</style>