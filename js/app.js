function newGuid() {
    return 'xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

function addTask(){

    let id = newGuid();

    $('#listToDos').removeClass('hidden');
    let htmTask = `
        <div class="todo col-12" id="todo${id}">
            <div class="todo-title col-10">
                <input  placeholder="Digite a tarefa" id="tarefa${id}"/>
                <a class="btn btn-success" onclick="doneTask('${id}')">
                    <i class="fas fa-check"></i>
                </a>
            </div>
        </div>
    `;

    $('#listToDos').append(htmTask);

}

function doneTask(id) { 
    $(`#todo${id}`).toggle();
    $(`#todo${id}`).hide();
}