console.log("Hello!");

function walk(elem) {
    if (elem.hasChildNodes()) {
    for (let child of elem.childNodes) {
        walk(child);
        };
    }
    else {
        let raw = elem.textContent;
        let replaced = raw.replace(/cheese/gi, "nuts");
        elem.textContent = replaced;
    };
}

walk(document.body);