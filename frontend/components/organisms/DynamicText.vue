<script setup>
defineProps({
    heading: {
        type: String,
        default: ''
    },
    items: {
        type: Array,
        default: () => []
    },
    marginBottom: {
        type: Boolean,
        default: true,
    },
    button: {
        type: Object,
        default: () => []
    }
})

const selectedIndex = ref(0)

const changeActiveItem = (itemId) => {
    selectedIndex.value = itemId
}
</script>

<template>
    <div :class="['dynamic-text', marginBottom ? 'g-mb' : '']">
        <div class="dynamic-text__inner-wrapper">
            <div v-if="heading" v-html="heading" class="heading"></div>
            <hr>
            <div class="items">
                <div v-html="items[selectedIndex]?.text" class="items__content"></div>
                <div class="items__overview">
                    <ul class="items-wrapper">
                        <li v-for="(item, index) in items" :key="index">
                            <NuxtLink :to="item.url" :class="['item', selectedIndex === index ? 'item--active' : '']"
                                @mouseover="changeActiveItem(index)">
                                <span>{{ item.title }}</span>
                                <div class="item__ball">
                                    <div class="inner"></div>
                                </div>
                            </NuxtLink>
                        </li>
                    </ul>
                    <div class="button-wrapper">
                        <Button v-if="button.url" :url="button.url" :style="'white'" :text="button.text"
                            :target="button.target"></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>