// Select color input
var color = document.querySelector("#colorPicker");
// Select size input
var sizePicker = document.getElementById("sizePicker");
var height = document.querySelector("#inputHeight");
var width = document.querySelector("#inputWidth");
var canvas =  document.querySelector("#pixelCanvas");


function makeGrid(height,width) {
  for (var i = 0 ; i < height ; i++){
          let row = canvas.insertRow(i);
    for (var j = 0 ; j < width ; j++){
         let cell = row.insertCell(j);
         cell.addEventListener('click', function(event) {
        // When the cell is clicked, the background color changes to the selected color
        	 event.target.style.backgroundColor = document.getElementById('colorPicker').value;
      });
     }
   }
};


sizePicker.addEventListener("submit", function(evt) {
    evt.preventDefault();
    while (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.lastChild);
    }

    makeGrid(height.value, width.value);
});

