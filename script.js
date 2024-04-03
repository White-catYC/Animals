window.onload = function() {
    if (!localStorage.getItem('welcomeShown')) {
        alert("Welcome to My Website!");
        localStorage.setItem('welcomeShown', 'true');
    }
};

function checkAnimal() {
    var animalInput = document.getElementById('animalInput').value.toLowerCase(); 
    var animalMessage = document.getElementById('animalMessage'); 
    var animalList = ['cat', 'dog', 'rabbit', 'parrot']; 
    if (animalList.includes(animalInput)) {
        animalMessage.textContent = "Yes, we have information about " + animalInput + "."; 
    } else {
        animalMessage.textContent = "Sorry, we don't have information about " + animalInput + "."; 
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('petForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var petName = document.getElementById('petName').value;
        var petType = document.getElementById('petType').value;
        var petAge = document.getElementById('petAge').value;
        var petColor = document.getElementById('petColor').value;
        var petDescription = document.getElementById('petDescription').value;

        if (!petName) {
            alert('Please fill in the pet name.');
        } else if (petType === "") {
            alert('Please select the type of animal.');
        } else if (!petAge) {
            alert('Please fill in the pet age.');
        } else if (!petColor) {
            alert('Please fill in the pet color.');
        } else if (!petDescription) {
            alert('Please fill in the pet description.');
        } else {
            alert('Form submitted. You have a great pet!');
            event.target.submit();
        }
    });
});

function toggleHorror() {
    var body = document.body;
    body.classList.toggle('horror');
}
function toggleLightgreen() {
    var body = document.body;
    body.classList.toggle('light-green-bg');
}
function togglelightcoral() {
    var body = document.body;
    body.classList.toggle('light-coral-bg');
}
function toggle1() {
    var body = document.body;
    body.classList.toggle('bg1');
}
function toggle2() {
    var body = document.body;
    body.classList.toggle('bg2');
}
