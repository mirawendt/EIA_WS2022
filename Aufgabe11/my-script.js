var todosArray = [
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
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
var openDOMElement;
var doneDOMElement;
var artyomOn = false;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    openDOMElement = document.querySelector("#open");
    doneDOMElement = document.querySelector("#done");
    addButtonDOMElement.addEventListener("click", function () {
        addTodo(inputDOMElement.value);
    });
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    for (let index = 0; index < todosArray.length; index++) {
        let todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + todosArray[index].checked + "'><i class='fas fa-check'></i></span>"
            + todosArray[index].text +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
        const key = inputDOMElement.value;
        const storageValue = inputDOMElement.value;
        localStorage.setItem(key, storageValue);
    }
    updateCounter();
}
var done = 1;
var openTask = 2;
function updateCounter() {
    counterDOMElement.innerHTML = todosArray.length + " in total";
    openDOMElement.innerHTML = openTask + " tasks open";
    doneDOMElement.innerHTML = done + " tasks done";
}
function addTodo(text) {
    if (inputDOMElement.value != "") {
        todosArray.unshift({
            text: inputDOMElement.value,
            checked: false
        });
        inputDOMElement.value = "";
        openTask++;
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
function toggleCheckState(index) {
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
function deleteTodo(index) {
    if (todosArray[index].checked == true) {
        done--;
    }
    else if (todosArray[index].checked == false) {
        openTask--;
    }
    todosArray.splice(index, 1);
    drawListToDOM();
}
//Sprachbefehl
window.addEventListener("load", function () {
    const artyom = new Artyom();
    artyom.addCommands({
        smart: true,
        indexes: ["Erstelle Aufgabe *"],
        action: function (i, wildcard) {
            artyomOn = true;
            addTodo(wildcard);
        }
    });
    document.querySelector("#start-voice").addEventListener("click", function () {
        artyom.dontObey();
        artyom.initialize({
            lang: "de-DE"
        });
        artyom.say("Hallo wie geht's! Ich bin Artyom, sag mir mit dem Schlüsselwort Erstelle Aufgabe was ich zur Liste hinzufügen soll.");
        setTimeout(function () {
            artyom.obey();
        }, 8000);
        startArtyom();
    });
    document.querySelector("#stop-voice").addEventListener("click", function () {
        stopArtyom();
        artyom.say("Und tschüss!");
    });
    function startArtyom() {
        artyom.initialize({
            lang: "de-DE",
            continuous: true,
            listen: true,
            interimResults: true,
            debug: true,
            speed: 1
        });
    }
    function stopArtyom() {
        artyom.fatality();
    }
});
//# sourceMappingURL=my-script.js.map