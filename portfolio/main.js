function handlePrint(text){
    //base case
    if(index == text.length){
        // handleDelete()
        return
    }
    // I am a CS student
    let character = text[index]; // I 
    index++;
    content += character;
    dynamicSpan.textContent = content
    setTimeout(handlePrint,300,text)
}

// function handleDelete(){
//     if(index == -1){
//         return
//     }
//     index--
//     content = content.substring(0,index-1)
//     dynamicSpan.textContent = content
//     setTimeout(handleDelete,300,text)
// }

const dynamicSpan = document.querySelector("#dynamic-text")

const phrases = ["I am a CS student","I am Software Engineer"]
let text = phrases[0]
let index = 0
let content = ''

handlePrint(text)