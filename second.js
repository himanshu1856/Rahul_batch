function handlePrint(text){
    if(index == text.length){
        handleDelete()
        return
    }
    let char = text[index]
    content += char
    dynamicSpan.textContent = content
    index++
    setTimeout(handlePrint,200,text)
}

// index = 15
// content = "I am a CS student"

function handleDelete(){
    if(index == -1){
        index = 0
        content = ''
        arrayIdx++
        iterateOverArray()
        return
    }
    index--;
    let ss = content.substring(0,index-1)
    content = ss
    dynamicSpan.textContent = content
    setTimeout(handleDelete,200)
}

function iterateOverArray(){
    if(arrayIdx == phrases.length){
        return
    }
    let text = phrases[arrayIdx]
    handlePrint(text)
}

const dynamicSpan = document.querySelector("#dynamic-text")

const phrases = ["A CS student...","A Software Engineer..."]

let index = 0
let content = ''
let arrayIdx = 0
iterateOverArray()