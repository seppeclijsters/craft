<script setup>
defineProps({
    self: {
        type: Object,
        default: () => []
    },
})

const transformData = (data) => {
    const transformedData = []
    data.forEach((collab) => {
        transformedData.push({
            title: collab.title,
            image: {
                url: collab.snippetImage[0]?.url,
                alt: collab.snippetImage[0]?.alt
            },
            button: {
                text: collab.snippetButtonText ?? 'Lees meer',
                url: collab.uri,
                target: '_self'
            }
        })
    })
    return transformedData
}
</script>

<template>
    <section aria-label="collabs" class="block-collabs g-mb">
        <div v-if="self.heading" class="block-collabs__title g-mb">
            <div v-html="self.heading"></div>
        </div>
        <div class="block-collabs__content">
            <DynamicImageLinks :data="transformData(self.collabs)"></DynamicImageLinks>
        </div>
    </section>
</template>