let addBtn = document.getElementById('addBtn')
let toDoBox = document.getElementById('toDoBox')
let inputBox = document.getElementById('inputBox')

addBtn.addEventListener('click', function() {
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputBox.value
    toDoBox.appendChild(paragraph)
    inputBox.value = ''
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through'
    })
    paragraph.addEventListener('dblclick', function () {
        toDoBox.removeChild(paragraph)
    })
})