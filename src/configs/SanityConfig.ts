import { createClient } from "@sanity/client";
import ImageUrlBuilder from '@sanity/image-url'
const SanityConfig = createClient({
    projectId:'6zrzzqz7',
    dataset:'production',
    useCdn:true,
    perspective: 'published'

})

const BuildImage = ImageUrlBuilder(SanityConfig);

export {SanityConfig, BuildImage};