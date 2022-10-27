<script setup>
defineProps({
    self: {
        type: Object,
        default: () => []
    },
})
</script>

<template>
    <div>
       <div v-html="self.text"></div>
    </div>
</template>