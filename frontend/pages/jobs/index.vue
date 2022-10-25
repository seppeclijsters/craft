<script setup>
const { getPageData, currentPage, jobs } = await usePageData()
// const data = ref()

onMounted(async () => {
    await getPageData('jobs')
})

</script>

<template>
  <div>
    <h2>Vacatures</h2>
    <!-- <div v-if="currentPage">
      {{ currentPage }}
    </div> -->
    <!-- <pre>
      {{ jobs.data.entries.length }}

    </pre> -->
    <div v-if="jobs" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

      <!-- {{ entries }} -->
      <NuxtLink v-for="post in jobs.entries" :key="post.id" :to="`jobs/${post.slug}`">
        <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
          <img class="w-24 h-24 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512">
          <h2> {{ post.title }} </h2>
          <div class="pt-6 space-y-4">
            <blockquote>
              <div v-html="post.jobInfo[0].text"></div>
            </blockquote>
          </div>
        </figure>
      </NuxtLink>
    </div>
  </div>
</template>
