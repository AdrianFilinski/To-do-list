{
    const tasks = [];

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
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

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class ="section__item js--task">
            <button class="task__button task__button--done js-toggleDone">${task.done ? "✔️": "X"}</button>
            <span class="section__span ${task.done ? "section__span--done" : ""}"> ${task.content}</span>
            <button class="task__button task__button--remove js-remove">🗑️</button>
            </li>
            `;

        }
        document.querySelector(".js-tasks").innerHTML = htmlString;


        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });
        const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");

        toggleDoneButtons.forEach((toggleDoneButtons, index) => {
            toggleDoneButtons.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };


    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-input");
        const newTask = newTaskContent.value.trim();

        if (newTask !== "") {
            addNewTask(newTask);
            newTaskContent.value = "";
        }

        newTaskContent.focus();

    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit)

    };

    init();
}
