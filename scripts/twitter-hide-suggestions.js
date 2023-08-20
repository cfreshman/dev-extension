console.debug('[extension] run dev-extension twitter-hide-suggestions.js')
;(async () => {

    if (/twitter.com/.test(location.href)) {
        const x = document.createElement('style')
        x.innerHTML = `
[data-testid="sidebarColumn"] {
visibility: hidden !important;
}
`
        document.body.append(x)
    }
})()
