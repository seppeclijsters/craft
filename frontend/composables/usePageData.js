export default function useStringMethods() {
    const route = useRoute()

    /* 
    -------------------
    State 
    -------------------
    */
    /* Page */
    const currentPage = useState('currentPage', () => '')

    /* Header */
    const mainMenuItems = useState('mainMenuItems', () => '')

    /* Footer */
    const footerMenuItems = useState('footerMenuItems', () => '')
    const footerText = useState('footerText', () => '')
    const footerCta = useState('footerCta', () => '')
    const socials = useState('socials', () => '')
    const bottomMenuItems = useState('BottomMenuItems', () => '')

    /* Content */
    const collabs = useState('collabs', () => [])

    /* 
    -------------------
    Methods 
    -------------------
    */
    const getPageData = async (pageType) => {
        try {
            /* Check if preview */
            let headers = {}
            const { token } = route.query
            if (token !== undefined) {
                headers = {
                    'x-Craft-Token': token ? `${token}` : '',
                }
                useGqlHeaders(headers)
            } else {
                useGqlHeaders(null)
            }

            /* Get page data */
            let response = null
            switch(pageType){
                case 'collab':
                    response = await GqlGetCollabPage({ slug: route.params.slug })
                    break
                case 'job':
                    response = await GqlGetJobPage({ slug: route.params.slug })
                    break
                default:
                    const pageUri = route.params.slug?.join('/')
                    response = await GqlGetPage({ uri: pageUri ?? '__home__' })
                    break
            }
            currentPage.value = response.entry
        } catch (error) {
            throw new Error(error)
        }
    }

    const getMainMenuItems = async () => {
        try {
            mainMenuItems.value = await GqlGetMainMenuItems()
        } catch (error) {
            throw new Error(error)
        }
    }

    const getFooterMenuItems = async () => {
        try {
            footerMenuItems.value = await GqlGetFooterMenuItems()
        } catch (error) {
            throw new Error(error)
        }
    }

    const getFooterText = async () => {
        try {
            footerText.value = await GqlGetFooterText()
        } catch (error) {
            throw new Error(error)
        }
    }

    const getFooterCta = async () => {
        try {
            footerCta.value = await GqlGetFooterCta()
        } catch (error) {
            throw new Error(error)
        }
    }

    const getSocials = async () => {
        try {
            socials.value = await GqlGetSocials()
        } catch (error) {
            throw new Error(error)
        }
    }

    const getBottomMenuItems = async () => {
        try {
            bottomMenuItems.value = await GqlGetBottomMenuItems()
        } catch (error) {
            throw new Error(error)
        }
    }

    const getCollabs = async () => {
        try {
            const response = await GqlGetCollabs()
            collabs.value = response.entries
            console.log(collabs.value)
        } catch (error) {
            throw new Error(error)
        }
    }

    return {
        /* State */
        currentPage,
        mainMenuItems,
        footerMenuItems,
        footerText,
        footerCta,
        socials,
        bottomMenuItems,
        collabs,

        /* Methods */
        getPageData,
        getMainMenuItems,
        getFooterMenuItems,
        getFooterText,
        getFooterCta,
        getSocials,
        getBottomMenuItems,
        getCollabs,
    }
}
