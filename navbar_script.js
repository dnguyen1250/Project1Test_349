document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');

  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Configure it: GET-request for the URL /navbar.html
  xhr.open('GET', 'navbar.html', true);

  // Send the request over the network
  xhr.send();

  // This will be called after the response is received
  xhr.onload = function() {
      if (xhr.status != 200) { // analyze HTTP response
          alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
      } else { // show the result
          header.innerHTML = xhr.responseText;
      }
  };
});
