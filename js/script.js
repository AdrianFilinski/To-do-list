{
    const tasks = [
        {
            content: "przerobić tydzień 2",
            done: true,
        },
        {
            content: "przerobić rozdział 3",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li>
                ${task.content}
            </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();
    };

    init();
}
