<script setup>
defineProps({
    self: {
        type: Object,
        default: () => []
    },
})
</script>

<template>
    <section aria-label="quote" class="block-quote g-mb">
        <div v-html="self.quote" class="block-quote__content"></div>
    </section>
</template>