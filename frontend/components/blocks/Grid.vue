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
        <h2>THIS IS A GRID BLOCK</h2>
        <div v-for="({ heading, text }, index) in self.blocks" class="text-block rte" :key="index">
            <div v-html="heading"></div>
            <div class="text" v-html="text"></div>
        </div>
    </div>
</template>