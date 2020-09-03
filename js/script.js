{
    const tasks = [];

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, );
        render();
    }

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });
    };

    const bindToggleDoneEvents = () => {
        const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const renderTasks = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class ="section__item">
            <button class="task__button task__button--done js-toggleDone">${task.done ? "✔️" : ""}</button>
            <span class="section__span" ${task.done ? ' style="text-decoration: line-through"' : ""} >${task.content}</span>
            <button class="task__button task__button--remove js-remove">🗑️</button>
            </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();

    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-input").value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            document.querySelector(".js-form").reset();
        } else {
            document.querySelector(".js-input").focus();
        }
    };

    const render = () => {
        renderTasks();
        bindToggleDoneEvents();
        bindEvents();
    }

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit)

    };

    init();
}