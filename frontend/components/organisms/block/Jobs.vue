<script setup>
defineProps({
    self: {
        type: Object,
        default: () => []
    },
})

const { urlLink } = useHelpers()

const selectedIndex = ref(0)

const changeActiveItem = (itemId) => {
    selectedIndex.value = itemId
}

const transformItemsData = (data) => {
    const transformedData = []
    data.jobs.forEach((job) => {
        transformedData.push({
            title: job.title ?? '',
            text: job.snippetText ?? '',
            url: job.uri ?? ''
        })
    })
    return transformedData
}

const transformButtonData = (data) => {
    return {
        text: data.linkIt?.customText ?? data.linkIt?.text ?? '',
        url: data.linkIt?.url ?? '',
        target: data.linkIt?.target ?? '',
    }
}
</script>

<template>
    <section v-if="!self.bgColor" aria-label="jobs" class="block-jobs g-mb">
        <ul class="block-jobs__all-jobs">
            <li v-for="({ title, url }, index) in self.jobs" :key="index" class="job">
                <NuxtLink :to="urlLink(url)" @mouseover="changeActiveItem(index)">
                    <h3>{{ title }}</h3>
                </NuxtLink>
            </li>
        </ul>
        <div class="block-jobs__content">
            <div class="image">
                <img :src="self.jobs[selectedIndex].snippetImage[0].url"
                    :alt="self.jobs[selectedIndex].snippetImage[0].alt">
            </div>
            <div class="text" v-html="self.jobs[selectedIndex].snippetText"></div>
        </div>
    </section>
    <section v-else aria-label="jobs">
        <DynamicText :heading="self.heading" :items="transformItemsData(self)" :button="transformButtonData(self)"
            :marginBottom="self.marginBottom" />
    </section>
</template>