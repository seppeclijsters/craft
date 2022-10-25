<script setup>
defineProps({
    self: {
        type: Object,
        default: () => {}
    },
})
</script>

<template>
    <div>
        <h2>THIS IS A TEXT BLOCK</h2>
        <div v-html="self.text" class="block-quote__content"></div>
    </div>
</template>