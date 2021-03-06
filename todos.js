var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

//criando array para armazenar os todos
var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

function renderTodos() {
  //zerando meu html
  listElement.innerHTML = "";
  for (todo of todos) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");
    //pegando a posição do array
    var pos = todos.indexOf(todo);
    linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");

    var linkText = document.createTextNode("Excluir");

    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}

renderTodos();

//adicionando novo todo
function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  saveToStorage();
}

//adicionando a função de clicar no botão
buttonElement.onclick = addTodo;

//criando função para excluir
function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

//criando função para salvar no storage do navegador
function saveToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(todos));
}
