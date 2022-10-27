<script setup>
import IconMapPin from "@/assets/icons/icon-map-pin.svg"
import IconArrowLeft from "@/assets/icons/icon-arrow-left.svg"

defineProps({
    self: {
        type: Object,
        default: () => []
    },
})
</script>

<template>
    <section aria-label="offices" class="block-offices g-mb">
        <div class="block-offices__inner-wrapper">
            <NuxtLink v-for="{ id, title, address, gMapsUrl } in self.offices" :key="id" class="office"
                :to="gMapsUrl.url ?? '#'" target="_blank">
                <h3 class="office__heading">
                    <IconMapPin></IconMapPin>
                    {{ title }}
                </h3>
                <div class="office__address" v-html="address"></div>
            </NuxtLink>
        </div>
        <h2 class="block-offices__heading">
            {{ self.heading ?? 'Onze Kantoren' }}
            <IconArrowLeft></IconArrowLeft>
        </h2>
    </section>
</template>