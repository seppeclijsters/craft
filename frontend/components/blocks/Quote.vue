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
        <h2>THIS IS A QUOTE BLOCK</h2>
        <div v-html="self.quote"></div>
    </div>
</template>