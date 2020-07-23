

var list= document.getElementById("list")


function addTodo(){
    var todo_item = document.getElementById("todo-item")
    // create li tag with texct node
    var li= document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.setAttribute("class","list-group-item list-group-item-danger")
    li.appendChild(liText) 

    ; 
    
// create delete btn

    var delBtn=document.createElement("button")
    var delText = document.createTextNode("Delete")
    delBtn.setAttribute("class", "btn btn-outline-secondary  ")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    
     delBtn.appendChild(delText)
   // create edit button 
   var editBtn=document.createElement("button")
    var editText= document.createTextNode("Edit")
    editBtn.setAttribute("class","btn btn-outline-secondary")
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.appendChild(editText)
 
    
    
    
    li.appendChild(delBtn)
   li.appendChild(editBtn)


    list.appendChild(li)
    todo_item.value= ""

    console.log(li)

}

function deleteItem(e){
    e.parentNode.remove()
}
 
function editItem(e){
   var val = prompt("enter update value",e.parentNode.firstChild.nodeValue )
e.parentNode.firstChild.nodeValue = val;
}


function deleteAll(){
    list.innerHTML= ""
}


