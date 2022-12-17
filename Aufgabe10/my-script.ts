interface TodoInterface {
    text: string;
    checked: boolean;
}

var todosArray: TodoInterface[] = [
    {
        text: "Abitur",
        checked: true
    },
    {
        text: "Bachelor",
        checked: false
    },
    {
        text: "Lebenssinn",
        checked: false
    }

];

var inputDOMElement: HTMLInputElement; 
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
var openDOMElement: HTMLElement;
var doneDOMElement: HTMLElement;
var artyomOn: boolean = false;


window.addEventListener("load", function(): void {

    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    openDOMElement = document.querySelector("#open");
    doneDOMElement = document.querySelector("#done");
  
    addButtonDOMElement.addEventListener("click", function(): void {
        addTodo(inputDOMElement.value);
    });

   
    drawListToDOM();
});

function drawListToDOM(): void {
    
    todosDOMElement.innerHTML = "";

    
    for (let index: number = 0; index < todosArray.length; index++) {

       
        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

       
        todo.innerHTML =  "<span class='check " + todosArray[index].checked + "'><i class='fas fa-check'></i></span>"
                            + todosArray[index].text +
                            "<span class='trash fas fa-trash-alt'></span>";

       
        todo.querySelector(".check").addEventListener("click", function(): void {
            
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
           
            deleteTodo(index);
        });

       
        todosDOMElement.appendChild(todo);
        
        
        const key: string = inputDOMElement.value;
        const storageValue: string = inputDOMElement.value;
        localStorage.setItem(key, storageValue);
    }

    updateCounter();
}


var done: number = 1;
var openTask: number = 2;

function updateCounter(): void {
    counterDOMElement.innerHTML = todosArray.length + " in total";
    openDOMElement.innerHTML = openTask + " tasks open";
    doneDOMElement.innerHTML = done + " tasks done";
}


function addTodo(text: string): void {
    
    if (inputDOMElement.value != "") {
       
        todosArray.unshift({
            text: inputDOMElement.value,
            checked: false
        });
        
       
        inputDOMElement.value = "";

        
        openTask ++;
        drawListToDOM();
    }
    if (artyomOn == true) {
        todosArray.unshift({
            text: text,
            checked: false
        });
        artyomOn = false;
        openTask++;
        drawListToDOM();
    }
}


function toggleCheckState(index: number): void {

    
    if (todosArray[index].checked == true) {
        todosArray[index].checked = false;
        done--;
        openTask++;
    }
    else if (todosArray[index].checked == false) {
        todosArray[index].checked = true;
        done++;
        openTask--;
    }
   
    drawListToDOM();
}


function deleteTodo(index: number): void {
   
    if (todosArray[index].checked == true) {
        done--;
    }
    else if (todosArray[index].checked == false) {
        openTask--;
    }
    
    todosArray.splice(index, 1);
    
   
    drawListToDOM();
};