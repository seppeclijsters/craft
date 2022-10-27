<script setup>
defineProps({
    data: {
        type: Object,
        default: () => { }
    },
})

const selectedIndex = ref(1)

const selectItem = (itemId) => {
    selectedIndex.value = itemId
}
</script>

<template>
    <div class="dynamic-image-links">
        <div class="dynamic-image-links__image">
            <img :src="data[selectedIndex].image.url" :alt="data[selectedIndex].image.alt">
        </div>
        <div class="dynamic-image-links__companies">
            <div v-for="({ title, text, button }, index) in data" :key="index" class="company">
                <h3 @mouseover="selectItem(index)" :class="{ 'active': selectedIndex === index }">
                    {{ title }}
                </h3>
                <p v-if="text && index === selectedIndex" class="company__service">{{ text }}</p>
                <Button v-if="index === selectedIndex" :url="button.url" :border="false" :style="'primary'"
                    :target="button.target" :text="button.text"></Button>
            </div>
        </div>
    </div>
</template>