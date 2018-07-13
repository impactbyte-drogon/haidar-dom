// DATA

const todos = [{
        text: `Wake up in the morning`
    },
    {
        text: `Take a warm shower`
    },
    {
        text: `Get ready with casual clothes`
    },
    {
        text: `Do some work with the laptop`
    },
    {
        text: `Hack some servers`
    },
    {
        text: `Rule the world`
    }
]

// DOM ELEMENTS

const todoForm = document.getElementById("todo-form")
const todoOutput = document.getElementById("todo-output")

// FUNCTIONS

const createElementFromHTML = (htmlString) => {
    var div = document.createElement("div");
    div.innerHTML = htmlString.trim();

    return div.firstChild;
}

const reloadTodos = () => {
    todoOutput.innerHTML = ""

    todos.forEach((todo, index) => {
        const todoElement = createElementFromHTML(`
            <div class="todo-item" data-id="todo-${index}">
                ${todo.text}
                <button class="delete btn btn-outline-light btn-sm">❌</button>
                <button class="edit btn btn-outline-light btn-sm">✍</button>
            </div>    
        `)

        todoOutput.append(todoElement)
    })
}

// LISTENERS

todoForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const todoText = document.getElementById("todo-text").value
    todos.push({
        text: todoText
    })

    if (todoText !== "") reloadTodos()
})

// INITIALIZER

reloadTodos()