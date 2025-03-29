function getFact() {
  const number = document.getElementById("numberInput").value;
  const factDiv = document.getElementById("fact");

  if (number === "") {
    factDiv.textContent = "Please enter a number.";
    return;
  }

  fetch(`http://numbersapi.com/${number}`)
    .then(response => response.text())
    .then(data => {
      factDiv.textContent = data;
    })
    .catch(error => {
      factDiv.textContent = "Oops! Something went wrong.";
      console.error("Error fetching fact:", error);
    });
}
