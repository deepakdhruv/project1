document.addEventListener("DOMContentLoaded", function() {
    // Get the add button and table body elements
    var addButton = document.getElementById("add");
    var tableBody = document.getElementById("tablebody");
  
    addButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default button behavior
  
      // Get the note value from the input field
      var noteInput = document.getElementById("note");
      var noteValue = noteInput.value;
  
      if (noteValue.trim() !== "") { // Check if the note is not empty
        var newRow = document.createElement("tr");
        
        var serialNumberCell = document.createElement("td");
        serialNumberCell.textContent = tableBody.children.length + 1;
        
        var noteCell = document.createElement("td");
        noteCell.textContent = noteValue;
        
        var dateCell = document.createElement("td");
        var currentDate = new Date();
        dateCell.textContent = currentDate.toDateString();
        
        var timeCell = document.createElement("td");
        var currentTime = currentDate.toLocaleTimeString();
        timeCell.textContent = currentTime;
        
        var actionsCell = document.createElement("td");
        var deleteButton = document.createElement("button");
        deleteButton.classList.add("btn");
        deleteButton.textContent = "Delete";
  
        deleteButton.addEventListener("click", function() {
          tableBody.removeChild(newRow);
        });
  
        actionsCell.appendChild(deleteButton);
  
        newRow.appendChild(serialNumberCell);
        newRow.appendChild(noteCell);
        newRow.appendChild(dateCell);
        newRow.appendChild(timeCell);
        newRow.appendChild(actionsCell);
  
        tableBody.appendChild(newRow);
  
        noteInput.value = "";
      }
    });
  });
  