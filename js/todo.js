const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const beforeList = document.getElementById("before-todo-list");
const beforeTodoBtn = document.getElementById("btnBefore");



let toDos =[];
var date = new Date();
const keyYear =String(date.getFullYear())
const keyMonth =String(date.getMonth()+1).padStart(2,"0");
const keyDay =String(date.getDate()).padStart(2,"0");
var TODOS_KEY="todos"+ keyYear+ keyMonth + keyDay;
function saveToDos(){
    console.log(TODOS_KEY)
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement.parentElement.parentElement.parentElement;
    console.log(li.id);
    toDos=toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintToDo(newTodoObj){
    const li =document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText=newTodoObj.text;

     //const button = document.createElement("button");
    const div = document.createElement("div");
    div.innerHTML="<div class='main-button-out'><div class='main-button-in'><button>⨉</button></div></div>"
    div.addEventListener("click", deleteToDo);

    /*    button.innerText="⨉"
        button.wrap( '<div class="main-button-out"><div class="main-button-in"></div></div>' );
        button.innerHTML="<div class='test'>⨉</div>"*/

        // button.innerText="X";
        // button.addEventListener("click", deleteToDo);

         // button.innerText="X";
         // button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(div);
    toDoList.appendChild(li);
    
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo =toDoInput.value;
    toDoInput.value="";
    const newTodoObj ={
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

console.log(TODOS_KEY);
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos= parsedToDos;
    parsedToDos.forEach(paintToDo);
}


// function paintBeforeToDo(newTodoObj,li){
//     const span = document.createElement("span");
//     span.innerText=newTodoObj.text;
//     console.log(newTodoObj.text);
//     li.appendChild(span);
// }

function handleBeforeTodos(event){
    event.preventDefault();
    while( beforeList.firstChild ){
        beforeList.removeChild( beforeList.firstChild );
    }

    var date = new Date();
    // const keyYear =String(date.getFullYear())
    // const keyMonth =String(date.getMonth()+1).padStart(2,"0");
    const keyDay =String(date.getDate());
    //const beforeKeys = 

    const currentMoment = moment().subtract(keyDay-1, 'days');
    const endMoment = moment().add(0, 'days');
    //console.log(`${endMoment.format('YYYYMMDD')}`)
    while (currentMoment.isBefore(endMoment, 'day')) {
        const key = `${currentMoment.format('YYYYMMDD')}`;
        var T_KEY="todos"+ key;
        const dayToDos = localStorage.getItem(T_KEY);
        //console.log(T_KEY);
        if( !dayToDos ){
            //console.log(dayToDos);
        }else{
            const li =document.createElement("li");
            const ul =document.createElement("ul");

            const span = document.createElement("span");
            span.innerText=currentMoment.format('YYYY년MM월DD일');
            li.appendChild(span);
            
            const parsedToDos = JSON.parse(dayToDos);
            parsedToDos.forEach(pTodo => {
                const list =document.createElement("li");
                const span = document.createElement("span");
                span.innerText=pTodo.text;
                list.appendChild(span);
                console.log(pTodo.text);
                ul.appendChild(list);
            });
            li.appendChild(ul);

            
            beforeList.appendChild(li);




        }


        currentMoment.add(1, 'days');
    }

}

beforeTodoBtn.addEventListener("click", handleBeforeTodos);
