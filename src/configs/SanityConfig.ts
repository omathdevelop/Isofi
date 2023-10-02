import { createClient } from "@sanity/client";
import ImageUrlBuilder from '@sanity/image-url'
const SanityConfig = createClient({
    projectId:'6zrzzqz7',
    dataset:'production',
    useCdn:true,
    apiVersion:'v2021-10-21'
})

const BuildImage = ImageUrlBuilder(SanityConfig);

export {SanityConfig, BuildImage};