<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper'

import 'swiper/css'

const { urlLink } = useHelpers()

defineProps({
    self: {
        type: Object,
        default: () => []
    },
})
</script>

<template>
    <section aria-label="image-carousel" class="block-images g-mb">
        <div class="block-images__content">
            <div class="heading" v-if="self.heading" v-html="self.heading"></div>
            <Button v-if="self.linkIt?.url" :url="urlLink(self.linkIt.url)" :style="'primary'"
                :text="self.linkIt.customText ?? self.linkIt.text"></Button>
        </div>
        <div class="block-images__carousel">
            <swiper :modules="[Autoplay]" :loop="true" :speed="1000" :draggable="false" :slidesPerView="'auto'"
                :space-between="16" :autoplay="{ delay: 2000, pauseOnMouseEnter: false, disableOnInteraction: false }">
                <swiper-slide v-for="({ url, alt }, index) in self.images" :key="index">
                    <img :src="url" :alt="alt" />
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>
