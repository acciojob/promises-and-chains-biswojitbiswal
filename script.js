//your JS code here. If required.
let form = document.getElementById("form")
let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");



form.addEventListener("submit", (e) => {
    e.preventDefault();

    validate.textContent = "";

    if(!nameInput.value || !ageInput.value){
        alert("inputs cannot be empty.");
        return;
    }

    let age = parseInt(ageInput.value);
    let name = nameInput.value;

    new Promise((resolve, reject) => {
        setTimeout(() => {
            if(age > 18){
                resolve(`Welcome, ${name}. You can vote.`)
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`)
            }
        }, 4000);
    })
    .then(message => alert(message))
    .catch(error => alert(error));
});