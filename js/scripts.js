// get the button that opens the contact form modal
var btn = document.getElementById("contact-button");

// get the contact form modal
var modal = document.getElementById("modal");

// get the button that sends the message
var send = document.getElementById("send-button");

// get the <span> element that closes the modal
var span = document.getElementsByClassName("close-button")[0];

// when the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// when user sends message, triggers alert
send.onclick = function() {
  alert("Message sent - thanks!");
}

// when user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// when user clicks outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
