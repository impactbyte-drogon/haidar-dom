// ===========================================================================
// DATA STORAGE

const todos = []

// ===========================================================================
// DOM ELEMENTS

const todoInputForm = document.getElementById("todo-input-form")
const todoSearchForm = document.getElementById("todo-search-form")
const todoOutput = document.getElementById("todo-output")

const seed = (todos) => {
    todos.push({
        text: `Wake up in the morning`,
        date: new Date()
    }, {
        text: `Take a warm shower`,
        date: new Date()
    }, {
        text: `Get ready with casual clothes`,
        date: new Date()
    }, {
        text: `Do some work with the laptop`,
        date: new Date()
    }, {
        text: `Hack some servers`,
        date: new Date()
    }, {
        text: `Rule the world`,
        date: new Date()
    })
}

// ===========================================================================
// READ / DISPLAY

const createElementFromHTML = (htmlString) => {
    var div = document.createElement("div");
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}

const createTodoElement = (todo, index) => {
    return createElementFromHTML(`
        <div data-id="todo-${index}" class="todo-item">
            ${todo.text}
            <span class="date badge badge-pill badge-light">
                ${moment(todo.date).calendar()}
            </span>
            <div class="btn-group">
                <button class="destroy btn btn-outline-light btn-sm" data-toggle="tooltip" data-placement="top"
                title="Remove" data-original-title="Remove">
                    rm
                </button>
                <button class="edit btn btn-outline-light btn-sm" data-toggle="tooltip" data-placement="top"
                title="Edit" data-original-title="Edit">
                    mv
                </button>
            </div>
        </div>    
    `)
}

const display = () => {
    todoOutput.innerHTML = ""

    todos.forEach((todo, index) => {
        const todoElement = createTodoElement(todo, index)
        todoOutput.append(todoElement)
    })

    $('[data-toggle="tooltip"]').tooltip()
}

// ===========================================================================
// LISTENERS

todoInputForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const todoInputText = document.getElementById("todo-input-text").value
    todos.push({
        text: todoInputText,
        date: new Date()
    })

    if (todoInputText !== "") display()
})

todoSearchForm.addEventListener("submit", (event) => {
    event.preventDefault()
})

// ===========================================================================
// INITIALIZER

// SEEDER
seed(todos)

// INITIAL DISPLAY
display()