const input = document.querySelector('.input');
const addBtn = document.querySelector('.addButton');
const container = document.querySelector('.container')
const deletBtn = document.querySelector('.deleteButton')
// console.log(input);

const markup = function (){
    return  `

    <div class="item">
            <h3 class="item_input">${input.value}</h3>
            <button class="editButton">Edit</button>
            <button class="deleteButton">Delete</button>
        </div>
`
}
const addText = function(){
   
    const html = markup()
    
   return container.insertAdjacentHTML('afterbegin', html)
}

addBtn.addEventListener('click', function(e){
    e.preventDefault();
    addText()
})
