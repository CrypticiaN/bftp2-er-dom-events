$(document).ready(function() {
    //write code inside this block

    let tasks = [];

// ads task to task list
    $("#submit").on("click", function() {
        let newTask = $("#newTask").val();

        if (newTask !== "") {

            tasks.push(newTask);

            $("#taskList").empty();

            tasks.forEach( t =>
                $("#taskList").append(
                    `<div class="task">${t}</div>`
                )
            );
        }
    });

// clear all list items
    $("#clearButton").on("click", function() {
        if (newTask !== "") {

            tasks.splice(newTask);

            $("#taskList").empty();
        }
    });
});

