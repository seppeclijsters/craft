<script setup>
defineProps({
    text: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    style: {
        type: String,
        default: ''
    },
    border: {
        type: Boolean,
        default: true
    },
    target: {
        type: String,
        default: '_self'
    }
})
</script>

<template>
    <NuxtLink :class="['button', { 'button--border': border }, style ? `button--${style}` : '']" :to="url"
        :target="target">
        <div class="button__ball">
            <span class="inner"></span>
        </div>
        {{ text }}
    </NuxtLink>
</template>