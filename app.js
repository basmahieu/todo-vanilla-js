const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

// Adding html
const generateTemplate = todo => {
const html = `
<li class="list-group-item d-flex justify-content-between align-items-center">
<span>${todo}</span>
<i class="far fa-trash-alt delete"></i>
</li>
`;

list.innerHTML += html;

}

// Action on enter 
addForm.addEventListener('submit', e => {
    
    e.preventDefault();
    const todo = addForm.add.value.trim() // Trim will remove whitespace
    console.log(todo);

    if(todo.length){
        generateTemplate(todo);
        addForm.reset(); // Will reset input field
    }
})


// Action on delete
list.addEventListener('click', e => {
    
    e.preventDefault();
  
if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
}

})
