function handlePrint(){
    if(index == text.length){
        handleDelete()
        return
    }
    let char = text[index]
    content += char
    dynamicSpan.textContent = content
    index++
    setTimeout(handlePrint,300)
}

// index = 15
// content = "I am a CS student"

function handleDelete(){
    if(index == -1){
        return
    }
    index--;
    let ss = content.substring(0,index-1)
    content = ss
    dynamicSpan.textContent = content
    setTimeout(handleDelete,300)
}

const dynamicSpan = document.querySelector("#dynamic-text")

const phrases = ["I am a CS student...","I am Software Engineer"]
let text = phrases[0]
let index = 0
let content = ''

handlePrint(text)