const inputTag = document.querySelector('.todo-input')
const addBtn = document.querySelector('.add-todo')
const todoContainer = document.querySelector('.todo-container')

addBtn.addEventListener('click',addTodo)
inputTag.addEventListener('keypress',(e)=>{
    if(e.key == 'Enter'){
        addTodo()
    }
})

function addTodo(){
    let inputValue = inputTag.value
    inputTag.value = ''
    if(!inputValue){
        return
    }
    createTodo(inputValue)
}

function createTodo(text){
    let todoDiv = document.createElement('div')
    todoDiv.classList.add('todo-item')

    let pTag = document.createElement('p')
    pTag.classList.add('todo-text')
    pTag.textContent = text

    let deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-todo')
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click',(e)=>{
        // console.log(e)
        e.target.parentNode.remove()
    })

    todoDiv.appendChild(pTag)
    todoDiv.appendChild(deleteBtn)

    todoContainer.appendChild(todoDiv)
}

