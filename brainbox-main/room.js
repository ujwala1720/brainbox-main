import './style.css'

let timer;
    let minutes = 25;
    let seconds = 0;
    let isRunning = false;

    // Update the timer display
    function updateTimerDisplay() {
      document.getElementById('timer').innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // Start the timer
    function startTimer() {
      if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
          if (minutes === 0 && seconds === 0) {
            clearInterval(timer);
            isRunning = false;
            alert('Time is up!');
          } else {
            if (seconds === 0) {
              minutes--;
              seconds = 59;
            } else {
              seconds--;
            }
            updateTimerDisplay();
          }
        }, 1000);
      }
    }

    // Reset the timer
    function resetTimer() {
      clearInterval(timer);
      isRunning = false;
      minutes = 25;
      seconds = 0;
      updateTimerDisplay();
    }

    // Initialize event listeners
    document.getElementById('startButton').addEventListener('click', startTimer);
    document.getElementById('resetButton').addEventListener('click', resetTimer);

    // Initial timer display
    updateTimerDisplay();

    //tasks tab

    let button = document.getElementById('button');
    const addTask = () => {
      
      let taskInput = document.getElementById('taskInput');
      let taskList = document.getElementById('taskList');
      let taskValue = taskInput.value;
      taskInput.value="";
      if(!taskValue){
        return;
      }

      var li = document.createElement('li');
      li.textContent = taskValue;

      // Add a delete button to the list item
      let deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function() {
        li.parentNode.removeChild(li);
      };
      li.appendChild(deleteButton);

      // Add the new task to the task list
      document.getElementById('taskList').appendChild(li);
    };

    button.addEventListener('click', addTask);