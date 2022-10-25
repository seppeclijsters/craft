<script setup>
const { data: footer } = await useAsyncData(`footer`, () => GqlGetFooter())
</script>

<template>
    <footer class="flex p-8 bg-dark text-white">
        <img v-if="footer.globalSets[0].logo[0]?.url" :src="`${footer.globalSets[0].logo[0].url}`" alt="">
        <span class="text-white"> {{ footer.globalSets[0].text }} </span>
    </footer>
</template>