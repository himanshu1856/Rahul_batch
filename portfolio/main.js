function handlePrint(text){
    if(index == text.length){
        handleDelete()
        return
    }
    let char = text[index]
    content += char
    dynamicSpan.textContent = content
    index++
    setTimeout(handlePrint,300,text)
}

// index = 15
// content = "I am a CS student"

function handleDelete(){
    if(index == -1){
        arrayIdx++
        index = 0
        iterateOverArray()
        return
    }
    index--;
    let ss = content.substring(0,index-1)
    content = ss
    dynamicSpan.textContent = content
    setTimeout(handleDelete,300)
}

function iterateOverArray(){
    if(arrayIdx == phrases.length){
        arrayIdx = 0
    }
    let text = phrases[arrayIdx]
    handlePrint(text)
}


const dynamicSpan = document.querySelector("#dynamic-text")

const phrases = ["I am a CS student...","I am Software Engineer"]
let index = 0
let arrayIdx = 0
let content = ''

iterateOverArray()

