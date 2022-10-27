<script setup>
defineProps({
    self: Object,
})
</script>

<template>
    <section aria-label="text-and-image" class="block-text-and-image g-mb">
        <div v-if="self.image?.length" class="block-text-and-image__image">
            <img :src="self.image[0].url" alt="">
        </div>
        <div v-if="self.heading" v-html="self.heading" class="block-text-and-image__title"></div>
        <div v-html="self.text" class="block-text-and-image__text"></div>
    </section>
</template>