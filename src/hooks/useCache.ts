/* eslint-disable @typescript-eslint/no-floating-promises */


const useCache = () => {
const cacheFiles = '../../index.html';
caches.open('ISOFI_ASSET').then((data) => {
    data.add(cacheFiles)
}).catch(() => {
    console.log('something went wrong')
})
};

export default useCache;