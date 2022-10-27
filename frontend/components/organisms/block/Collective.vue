<script setup>
defineProps({
    self: {
        type: Object,
        default: () => []
    },
})

const transformData = (data) => {
    const transformedData = []
    data.forEach((company) => {
        transformedData.push({
            title: company.title,
            image: {
                url: company.image[0]?.url,
                alt: company.image[0]?.alt
            },
            text: company.text,
            button: {
                text: company.website.text ?? 'Lees meer',
                url: company.website.url,
                target: '_blank'
            }
        })
    })
    return transformedData
}
</script>

<template>
    <section aria-label="collective" class="g-mb">
        <DynamicImageLinks :data="transformData(self.companies)"></DynamicImageLinks>
    </section>
</template>