<script setup>
defineProps({
    self: {
        type: Object,
        default: () => []
    },
})
</script>

<template>
    <section v-if="self.image?.length" aria-label="call-to-action"
        :class="['block-call-to-action block-call-to-action--dark', { 'g-mb': self.marginBottom }]">
        <div class="block-call-to-action__image">
            <img :src="self.image[0].url" :alt="self.image[0].alt">
        </div>
        <div class="block-call-to-action__content">
            <div class="text" v-html="self.text"></div>
            <div>
                <Button v-if="self.linkIt?.url" :url="self.linkIt.url" :style="'primary'"
                    :text="self.linkIt.customText ?? self.linkIt.text"></Button>
            </div>
        </div>
    </section>
    <section v-else aria-label="call-to-action" class="block-call-to-action g-mb">
        <div class="block-call-to-action__wrapper">
            <div class="text" v-html="self.text"></div>
            <Button v-if="self.linkIt?.url" :url="self.linkIt.url" :style="'primary'"
                :text="self.linkIt.customText ?? self.linkIt.text"></Button>
        </div>
    </section>
</template>