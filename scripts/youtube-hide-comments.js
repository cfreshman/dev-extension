console.debug('[extension] run dev-extension youtube-hide-comments.js')
;(async () => {

    if (/youtube.com/.test(location.href)) {
        const x = document.createElement('style')
        x.innerHTML = `
#secondary, #related {
visibility: hidden !important;
}

[section-identifier="comment-item-section"] {
visibility: hidden !important;
}
`
        document.body.append(x)
    }
    
})()
