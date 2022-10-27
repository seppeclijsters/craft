<script setup>
defineProps({
    self: {
        type: Object,
        default: () => []
    },
})

const transformItemsData = (data) => {
    const transformedData = []
    data.services.forEach((service) => {
        transformedData.push({
            title: service.heading ?? '',
            text: service.text ?? ''
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
    <section aria-label="services">
        <DynamicText :heading="self.heading" :items="transformItemsData(self)" :button="transformButtonData(self)"
            :marginBottom="self.marginBottom" />
    </section>
</template>