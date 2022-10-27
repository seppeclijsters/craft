<script setup>
defineProps({
    self: {
        type: Object,
        default: () => { }
    },
})
</script>

<template>
    <div
        :class="['block-grid', { 'block-grid--dark': self.bgColor }, { 'g-mb': self.marginBottom || self.bgColor === false }]">
        <div class="block-grid__inner-wrapper">
            <div v-for="({ heading, text }, index) in self.blocks" class="text-block rte" :key="index">
                <div :class="['heading', { 'heading--big': self.titleSize }]" v-html="heading"></div>
                <div class="text" v-html="text"></div>
            </div>
        </div>
    </div>
</template>