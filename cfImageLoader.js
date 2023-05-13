export default function cfImageLoader({ src, width, quality }) {
    const params = [`width=${width}`, `quality=${quality || 75}`, 'format=auto']
    return `https://hrpenci.site/cdn-cgi/image/${params.join(',')}/${src}`
}
