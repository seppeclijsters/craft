export default function useHelpers() {
    const config = useRuntimeConfig()

    const kebabCase = string =>
        string
            .replace(/([a-z])([A-Z])/g, '$1-$2')
            .replace(/[\s_]+/g, '-')
            .toLowerCase()

    const urlLink = (url, target = '_self') => {
        const newUrl = target !== '_blank' && url.includes(config.BASE_CMS_URL) ? 
            url.replace(config.BASE_CMS_URL, config.BASE_URL)
            : url
        return newUrl
    }

    return {
        kebabCase,
        urlLink,
    }
}
