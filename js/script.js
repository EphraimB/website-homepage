var door = document.getElementById("door");
var doorOpen = document.getElementById("doorOpen");
var doorKnob = document.getElementById("doorKnob");
var openDoorScreen = document.getElementById("openDoorScreen");
var accountInput = document.getElementById("accountInput");
var passwordInput = document.getElementById("passwordInput");
var submitButtonLogin = document.getElementById("submitButtonLogin");

submitButtonLogin.onclick = function()
{
    //Clear the screen
    accountInput.style.display = "none";
    passwordInput.style.display = "none";
    submitButtonLogin.style.display = "none";

    //Screen displays a welcome message
    openDoorScreen.innerHTML = "Welcome, " + accountInput.value;

    //Open the door
    door.style.display = "none";
    doorOpen.style.display = "inline";
};