document.addEventListener('DOMContentLoaded', function() { 

  // load tasks from local storage
  document.querySelector('#tasks').innerHTML = localStorage.getItem('#tasks');

  // By default, submit button is disabled 
  document.querySelector('#submit').disabled = true; 

  
  // After key is pressed and there is text, submit button is enabled
  document.querySelector('#task-input').onkeyup = () => { 
    if(document.querySelector('#task-input').value.length > 0) { 
      document.querySelector('#submit').disabled = false;
    }
    else { 
      document.querySelector('#submit').disabled = true;
    }
  }

  // After submission, add to tasks
  document.querySelector('form').onsubmit = () => { 
   
    const taskValue = document.querySelector('#task-input').value;

    const li = document.createElement('div');
    const task = document.createElement('p');
    const deleteButton = document.createElement('button');
    
    li.setAttribute("id", "li")
    task.setAttribute("id", "task")
    deleteButton.setAttribute("id", "delete-button")

    task.innerHTML = taskValue; 
    deleteButton.innerHTML = 'X';
    
    li.append(task); 
    li.append(deleteButton);
    

    document.querySelector('#tasks').append(li);
    document.querySelector('#task-input').value = '';
    document.querySelector('#submit').disabled = true; 

    // save tasks to local storage 
    localStorage.setItem('#tasks', document.querySelector('#tasks').innerHTML);

    // stop form from submitting 
    return false; 
  }

  // if delete button is clicked, remove the task 
  document.addEventListener('click', function(event) {
    element = event.target;
    if (element.id === 'delete-button') {
      element.parentElement.remove();
    }
    // save tasks to local storage 
    localStorage.setItem('#tasks', document.querySelector('#tasks').innerHTML);
  }
  )

});
