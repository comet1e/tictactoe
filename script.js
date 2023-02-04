// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
window.onload = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', () => {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

const playerMode = document.querySelector('#playerMode');
const botMode = document.querySelector('#botMode');

playerMode.addEventListener('click', () => {
  modal.style.display = "none";

  //  run code for playermode
})

botMode.addEventListener('click', () => {
  modal.style.display = "none";

  //  run code for botmode

})

const board = document.querySelectorAll("#board");

board.addEventListener('click', (e) => {
  // board.style.backgroundColor = black;
  console.log(e.target);
})
// 