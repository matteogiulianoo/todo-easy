class Logic {
    insertNewTask() {
        const input = document.getElementById('input-choose-task');
        const taskText = input.value.trim();
        
        if (taskText === '') {
            return; 
        }
        
        const ul = document.getElementById('ul-task');
        const li = document.createElement('li');
        li.textContent = taskText;
        li.className = 'task-item';
        
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '×';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            li.remove();
        });
        
        li.appendChild(deleteBtn);
        ul.appendChild(li);
        
        input.value = '';
    }
}

export { Logic };