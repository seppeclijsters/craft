export async function usePageData() {
    const route = useRoute()
    const jobs = useState('jobs')
    const currentJob = useState('currentJob')
    const currentPage = useState('currentPage')
    const menu = useState('menu')
    /* Content */
    const collabs = useState('collabs', () => [])

    const getPageData = async (pageType) => {
        console.log('getPageData wordt uitgevoerd')
        try {
            let response = null
            // console.log("pageType")
            // console.log(pageType)
            // response = await GqlgetPage({ slug: route.params.slug })
            switch(pageType){
                case 'collab':
                    response = await GqlGetCollabPage({ slug: route.params.slug })
                    break
                case 'job':
                    // response = await useAsyncData(`post`, () => GqlGetPost({ slug: route.params.job }))
                    response = await GqlGetPost({ slug: route.params.slug })
                    currentJob.value = response
                    // currentPage.value = response
                    console.log('job switch')
                    break
                case 'jobs':
                    // response = await useAsyncData(`post`, () => GqlGetPosts())
                    response = await GqlGetPosts()
                    jobs.value = response
                    // jobs.value = response
                    // currentPage.value = response
                    console.log('jobsss switch')
                    break
                default:
                    const pageUri = await route.params.slug
                    console.log(pageUri)
                    // console.log(pageUri)
                    response = await GqlGetPage({ uri: pageUri ?? 'home' })
                    break
            }
            // console.log(response.data.value.entries)
            currentPage.value = response
        } catch (error) {
            throw new Error(error)
        } finally {
            // console.log(route.params.slug?.join('/'))
            // console.log(currentPage?.value?.data?.entries[0])
        }
    }

    await getPageData()


    const getMenu = async () => {
        try {
            menu.value = await GqlGetMenu()
        } catch (error) {
            throw new Error(error)
        }
    }


    return {
        /* State */
        currentPage,
        collabs,
        currentJob,
        jobs,
        menu,

        /* Methods */
        getPageData,
        getMenu
    }
}
