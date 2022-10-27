<script setup>
// import {
//     BlockCallToAction,
//     BlockCollabs,
//     BlockQuote,
//     BlockServices,
//     BlockTextAndImage,
//     BlockTextCarousel,
//     BlockJobs,
//     BlockOffices,
//     BlockText,
//     BlockGrid,
//     BlockImage,
//     BlockCollective,
//     BlockImages,
//     BlockForm
// } from '~~/.nuxt/components';

const BlockCallToAction = resolveComponent('BlockCallToAction')
const BlockCollabs = resolveComponent('BlockCollabs')
const BlockQuote = resolveComponent('BlockQuote')
const BlockServices = resolveComponent('BlockServices')
const BlockTextAndImage = resolveComponent('BlockTextAndImage')
const BlockTextCarousel = resolveComponent('BlockTextCarousel')
const BlockJobs = resolveComponent('BlockJobs')
const BlockOffices = resolveComponent('BlockOffices')
const BlockText = resolveComponent('BlockText')
const BlockGrid = resolveComponent('BlockGrid')
const BlockImage = resolveComponent('BlockImage')
const BlockCollective = resolveComponent('BlockCollective')
const BlockImages = resolveComponent('BlockImages')
const BlockForm = resolveComponent('BlockForm')

defineProps({
    blocks: {
        type: Object,
        default: () => []
    },
})

const gridItems = {
    "collabs": BlockCollabs,
    "quote": BlockQuote,
    "services": BlockServices,
    "textAndImage": BlockTextAndImage,
    "textCarousel": BlockTextCarousel,
    "cta": BlockCallToAction,
    "jobs": BlockJobs,
    "offices": BlockOffices,
    "text": BlockText,
    "grid": BlockGrid,
    "image": BlockImage,
    "collective": BlockCollective,
    "images": BlockImages,
    "form": BlockForm
}
</script>

<template>
    <div class="content-grid">
        <div v-for="block in blocks" :key="block.uid">
            <component :is="gridItems[block.typeHandle]" :self="block"></component>
        </div>
    </div>
</template>