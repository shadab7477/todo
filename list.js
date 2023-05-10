const item = document.querySelector('#item');
const toDobox = document.querySelector('#to-do-box');
let savedtasks = localStorage.getItem('item')
item.addEventListener(
    "keyup",
    function(event){
        if(event.key=="Enter"){
            addtodo(this.value)
            this.value =""
        }
    }
)


localStorage.setItem("item",JSON.stringify(savedtasks));
const addtodo = (item ) =>{
    const listItem = document.createElement("li");
    listItem.innerHTML = `
${item}
<i class="fa-solid fa-trash"></i>

`;
listItem.addEventListener(
    "click",{
function () {
    this.classList.toggle("done");
    
}
    }
)
listItem.querySelector("i").addEventListener(
    "click", function(){
        listItem.remove()
    }
)

toDobox.appendChild(listItem)
}