<script setup>
const {
    menu,
    getMenu
} = await usePageData()

onBeforeMount( async () => {
    await getMenu()
})
</script>

<template>
    <div class="p-8 bg-dark flex" v-if="menu">
        <li class="text-white list-none px-4" v-for="{ title, uri, uid } in menu.entries" :key="uid">
            <NuxtLink :to="'/' + uri">
                {{ title }}
            </NuxtLink>
        </li>
    </div>
</template>