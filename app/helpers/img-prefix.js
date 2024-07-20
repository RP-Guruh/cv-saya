import { helper } from '@ember/component/helper';

export function addImgPrefix([html]) {
    if (!html) {
        return html;
    }

    // Lakukan manipulasi teks di sini
    // Misalnya, mencari tag <img> dan menambahkan prefix pada src-nya
    const modifiedHtml = html.replace(/(<img[^>]* src=")([^"]*)/g, function(match, p1, p2) {
        return p1 + 'http://127.0.0.1:8000' + p2;
    });

    const processedHtml = modifiedHtml.replace(/<code.*?>(.*?)<\/code>/gs, function(match, p1) {
        return `<p class="max-w-full overflow-x-auto bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg"><pre class="max-w-full overflow-x-auto">${p1}</pre></p>`;
    });

    const fixHtmlModified = processedHtml.replace(/<p.*?>(.*?)<\/p>/gs, function(match, p1) {
        return `<p class="font-extrabold">${p1}</p>`;
    });

    return fixHtmlModified;
}

export default helper(addImgPrefix);