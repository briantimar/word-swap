console.log("Hello!");

function isUpperCase(s) {
    return ( s === s.toUpperCase());
}

function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1, s.length)
}

let OLD_LOWER = "cheese";
let NEW_LOWER = "meat";

let OLD_CAP = capitalize(OLD_LOWER);
let NEW_CAP = capitalize(NEW_LOWER);

// OLD_LOWER = "\b" + OLD_LOWER + "\b";
// NEW_LOWER = "\b" + NEW_LOWER + "\b";


function walk(elem) {
    if (elem.hasChildNodes()) {
    for (let child of elem.childNodes) {
        walk(child);
        };
    }
    else {
        let raw = elem.textContent;
        let re_lower = new RegExp(OLD_LOWER, "g");
        let re_cap = new RegExp(OLD_CAP, "g")
        let replaced = raw.replace(re_lower, NEW_LOWER);
        replaced = replaced.replace(re_cap, NEW_CAP);
        elem.textContent = replaced;
    };
}

walk(document.body);