
  // Get all the navigation links
  var links = document.querySelectorAll("nav a");

  // Add click event listener to each link
  links.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();

      // Remove the active class from all links
      links.forEach(function(link) {
        link.classList.remove("active");
      });

      // Add the active class to the clicked link
      this.classList.add("active");
    });
  });

  // Get the form element
  var form = document.querySelector("#contact-form");

  // Add submit event listener to the form
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the user input
    var name = form.elements.name.value;
    var email = form.elements.email.value;
    var message = form.elements.message.value;

    // Create an object to store the user information
    var user = {
      name: name,
      email: email,
      message: message
    };

    // Save the user information to LocalStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Show a message to the user
    alert("Your information has been saved.");
  });


