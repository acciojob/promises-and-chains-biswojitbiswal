//your JS code here. If required.
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value.trim());

    if (name === "" || isNaN(age)) {
        alert("Please fill in both fields.");
        return;
    }
	
    function ageCheck() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (age > 18) {
              resolve(`Welcome, ${name}. You can vote.`);
            } else {
              reject(`Oh sorry ${name}. You aren't old enough.`);
            }
          }, 4000); // 4-second delay
        });
      }

      // Call the ageCheck function and handle the promise
      ageCheck()
        .then((message) => alert(message))
        .catch((error) => alert(error));
});



