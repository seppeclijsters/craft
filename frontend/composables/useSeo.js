export default function useStringMethods() {
    const setPageSeo = (seoData) => {
        const seoDataValues = {
            metaTitleContainer: JSON.parse(seoData.metaTitleContainer),
            metaTagContainer: JSON.parse(seoData.metaTagContainer),
            metaLinkContainer: JSON.parse(seoData.metaLinkContainer),
            metaScriptContainer: JSON.parse(seoData.metaScriptContainer),
            metaJsonLdContainer: JSON.parse(seoData.metaJsonLdContainer),
            metaSiteVarsContainer: JSON.parse(seoData.metaSiteVarsContainer),
        }

        const siteTitle = seoDataValues.metaTitleContainer.title.title ?? 'Phanes'
        const siteDescription = seoDataValues.metaTagContainer.description.content ?? 'Phanes collective'

        useHead({
            title: siteTitle,
            viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
            charset: 'utf-8',
            meta: [
                { name: 'description', content: siteDescription },
                { name: 'keywords', content: seoDataValues.metaTagContainer.keywords.content },
                { name: 'author', content: seoDataValues.metaJsonLdContainer.identity.name ?? siteTitle },
                { name: 'copyright', content: seoDataValues.metaJsonLdContainer.mainEntityOfPage.copyrightHolder ?? siteTitle },
                { name: 'HandheldFriendly', content: 'true' },
                { property: 'og:site_name', content: seoDataValues.metaTagContainer["og:site_name"].content ?? siteTitle },
                { property: 'og:title', content: seoDataValues.metaTagContainer["og:title"].content ?? siteTitle },
                { property: 'og:description', content: seoDataValues.metaTagContainer["og:description"].content ?? siteDescription },
                { property: 'og:type', content: seoDataValues.metaTagContainer["og:type"].content },
                { property: 'og:url', content: seoDataValues.metaTagContainer["og:url"].content },
                { property: 'og:image', content: seoDataValues.metaTagContainer["og:image"].content },
                { property: 'og:image:width', content: seoDataValues.metaTagContainer["og:image:width"].content },
                { property: 'og:image:height', content: seoDataValues.metaTagContainer["og:image:height"].content },
                { name: 'robots', content: 'index,follow' }
            ]
        })
    }

    return {
        setPageSeo
    }
}
