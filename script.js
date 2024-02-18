document.addEventListener("DOMContentLoaded", function() {
  const gridContainer = document.getElementById("grid-container");
  const addButton = document.getElementById("add-button");

  addButton.addEventListener("click", function() {
    const title = prompt("Entrez un titre pour le chronomètre (laissez vide pour ne pas en mettre) :");
    const timer = createTimer(title);
    gridContainer.appendChild(timer);
  });

  function createTimer(title) {
    const timerDiv = document.createElement("div");
    timerDiv.classList.add("timer");

    const timerDisplay = document.createElement("div");
    timerDisplay.textContent = "00:00:00";
    timerDiv.appendChild(timerDisplay);

    const startButton = document.createElement("button");
    startButton.textContent = "Start";
    timerDiv.appendChild(startButton);

    const stopButton = document.createElement("button");
    stopButton.textContent = "Stop";
    timerDiv.appendChild(stopButton);

    let seconds = 0;
    let timerInterval;

    function updateTimerDisplay() {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;
      timerDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    startButton.addEventListener("click", function() {
      if (!timerInterval) {
        timerInterval = setInterval(function() {
          seconds++;
          updateTimerDisplay();
        }, 1000);
      }
    });

    stopButton.addEventListener("click", function() {
      clearInterval(timerInterval);
      timerInterval = null;
    });

    if (title) {
      const titleLabel = document.createElement("div");
      titleLabel.textContent = title;
      timerDiv.appendChild(titleLabel);
    }

    return timerDiv;
  }
});

