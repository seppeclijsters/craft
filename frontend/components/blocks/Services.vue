<script setup>
defineProps({
    self: {
        type: Object,
        default: () => []
    },
})

// const transformItemsData = (data) => {
//     const transformedData = []
//     data.services.forEach((service) => {
//         transformedData.push({
//             title: service.heading ?? '',
//             text: service.text ?? ''
//         })
//     })
//     return transformedData
// }

// const transformButtonData = (data) => {
//     return {
//         text: data.linkIt?.customText ?? data.linkIt?.text ?? '',
//         url: data.linkIt?.url ?? '',
//         target: data.linkIt?.target ?? '',
//     }
// }
</script>

<template>
    <div>
        <h2>THIS IS A SERVICES BLOCK</h2>
        <div v-html="self.heading"></div>
        <div v-for="(service, i) in self.services" :key="i">
            <h2>{{service.heading}}</h2>
            <div v-html="service.text"></div>
        </div>
        <!-- <pre>
            {{ self }}
        </pre> -->
    </div>
</template>