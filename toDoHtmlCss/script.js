function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskInput.value}</span>
      <button onclick="removeTask(this)">Remover</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
  } else {
    alert('Por favor, digite uma tarefa válida.');
  }
}

function removeTask(button) {
  const taskItem = button.parentNode;
  taskItem.remove();
}
