<script setup>
// import {
//     // BlockCallToAction,
//     // BlockCollabs,
//     // BlockQuote,
//     // BlockServices,
//     // BlockTextAndImage,
//     // BlockTextCarousel,
//     // BlockJobs,
//     // BlockOffices,
//     BlockText,
//     // BlockGrid,
//     // BlockImage,
//     // BlockCollective,
//     // BlockImages,
//     // BlockForm
// } from '~~/.nuxt/components';

const BlockText = resolveComponent('BlocksText')
const BlockQuote = resolveComponent('BlocksQuote')
const BlockServices = resolveComponent('BlocksServices')
const BlockGrid = resolveComponent('BlocksGrid')

defineProps({
    blocks: {
        type: Array,
        default: () => []
    },
})

const gridItems = {
    // "collabs": BlockCollabs,
    "quote": BlockQuote,
    "services": BlockServices,
    // "textAndImage": BlockTextAndImage,
    // "textCarousel": BlockTextCarousel,
    // "cta": BlockCallToAction,
    // "jobs": BlockJobs,
    // "offices": BlockOffices,
    "text": BlockText,
    "grid": BlockGrid,
    // "image": BlockImage,
    // "collective": BlockCollective,
    // "images": BlockImages,
    // "form": BlockForm
}
</script>

<template>
    <div class="content-grid">
    <!-- ******** ContentGrid********** <br>
    {{ blocks }} <br><br> -->
    <div v-for="block in blocks" :key="block.uid" class="py-4">
        <!-- {{ block }} <br><br> -->
            <component :is="gridItems[block.typeHandle]" :self="block"></component>
        </div>
    </div>
</template>