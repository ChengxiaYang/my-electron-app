window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        element.innerHTML = text;
    }

    for (const dep of ['chrome', '`node', 'electron']) {
        replaceText(`${dep}-version`, process.versions[dep])
    }
})