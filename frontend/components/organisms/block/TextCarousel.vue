<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper'

import 'swiper/css'

defineProps({
    self: Object,
})
</script>

<template>
    <section aria-label="text-carousel" class="block-text-carousel g-mb">
        <div class="block-text-carousel__inner-wrapper">
            <swiper :modules="[Autoplay]" :loop="true" :speed="4000" :draggable="false"
                :autoplay="{ delay: 0, pauseOnMouseEnter: true, reverseDirection: self.direction === 'left', disableOnInteraction: false }"
                :slidesPerView="'auto'" :space-between="50">
                <swiper-slide v-for="({ word }, index) in self.words" :key="index">
                    {{ word }}
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>