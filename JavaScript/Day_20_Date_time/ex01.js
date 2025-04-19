function highlight(text, keyword){
    const regex = new RegExp(`(${keyword})`, "gi");
    return text.replace(regex, "<strong>$1</strong>")
}
const result = highlight("Học Javascript không khó, javascript", "javascript")
console.log(result);
