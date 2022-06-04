
console.log(firebase)

var contact = firebase.database().ref().child("contactForm");
document.getElementById('displayForm-1').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var Name = getInputVal('Name');
    var Mention = getInputVal('Mention');
    var Phone = getInputVal('Phone');
    var Email = getInputVal('Email');
    var Message = getInputVal('Message');
    
    saveForm(Name, Mention, Phone, Email, Message);
    
    document.getElementById('displayForm-1').reset();
}

function getInputVal(id) {

    return document.getElementById(id).value;
    
}

function saveForm(Name,Mention,Phone,Email,Message) {
    
    var newContact = contact.push();
    newContact.set({

        Name: Name,
        Email: Email,
        Mention: Mention,
        Phone: Phone,
        Message : Message
    });
    alert("message send");
}

// ............

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}