<script setup>
defineProps({
    self: {
        type: Object,
        default: () => { }
    },
})
</script>

<template>
    <div class="block-form g-mb">
        <div v-if="self.heading" v-html="self.heading" class="block-form__heading">
        </div>
        <div v-if="self.formie?.length" class="block-form__form-wrapper">
            <Formie :form="self.formie[0]" />
        </div>
    </div>
</template>