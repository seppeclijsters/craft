<script setup>
defineProps({
    self: {
        type: Object,
        default: () => []
    },
})
</script>

<template>
    <div class="block-image g-mb">
        <!-- <div class="block-image__inner-wrapper">
            <img :src="self.image[0].url" :alt="self.image[0].alt">
        </div> -->
    </div>
</template>