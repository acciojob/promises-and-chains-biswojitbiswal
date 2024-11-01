//your JS code here. If required.
let form = document.getElementById("form")
let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");



form.addEventListener("submit", (e) => {
    e.preventDefault();


    if(!nameInput.value || !ageInput.value){
        alert("inputs cannot be empty.");
        return;
    }

    let age = parseInt(ageInput.value);
    let name = nameInput.value;

    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve();
            } else {
                reject();
            }
        }, 4000); // 4-second delay
    })
    .then(() => {
        alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(() => {
        alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});