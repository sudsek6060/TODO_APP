const input = document.querySelector('.input');
const addBtn = document.querySelector('.addButton');
const container = document.querySelector('.container')



const markup = function (){
    return  `

    <div class="item">
            <h3 class="item_input">${input.value}</h3>
            <button class="editButton">Edit</button>
            <button class="deleteButton" >Delete</button>
        </div>
`
}



addBtn.addEventListener('click', function(e){
    e.preventDefault();
    
    let html = markup()
    
    // display todo
    container.insertAdjacentHTML('afterbegin', html);

    // empty the input
    input.value = '';

    // Delete TODO
    var current_tasks = document.querySelectorAll(".deleteButton");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

})


// deletBtn.addEventListener('click', deleteText())