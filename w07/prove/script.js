const form = document.querySelector("#ticketForm");
const ticketType = document.querySelector("#ticketType");
const codeContainer = document.querySelector("#codeContainer");
const codeLabel = document.querySelector("#codeLabel");
const codeInput = document.querySelector("#codeInput");
const output = document.querySelector("#output");

function updateCodeField() {
  const value = ticketType.value;

  if (value === "student") {
    codeContainer.hidden = false;
    codeLabel.textContent = "Student I#";
    codeInput.required = true;
    codeInput.value = "";
  } else if (value === "guest") {
    codeContainer.hidden = false;
    codeLabel.textContent = "Access Code";
    codeInput.required = true;
    codeInput.value = "";
  } else {
    codeContainer.hidden = true;
    codeInput.required = false;
    codeInput.value = "";
  }
}

function isLaterDate(value) {
  const today = new Date();
  const chosen = new Date(value + "T00:00");

  today.setHours(0, 0, 0, 0);

  return chosen > today;
}

function isStudentNumber(value) {
  if (value.length !== 9) {
    return false;
  }

  if (isNaN(value)) {
    return false;
  }

  return true;
}

ticketType.addEventListener("change", updateCodeField);
updateCodeField();

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";
  output.className = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const eventDate = form.eventDate.value;
  const type = form.ticketType.value;
  const code = form.codeInput.value.trim();

  if (!isLaterDate(eventDate)) {
    output.textContent = "Please choose a date later than today.";
    output.className = "error";
    return;
  }

  if (type === "student" && !isStudentNumber(code)) {
    output.textContent = "Please enter a 9 digit Student I#.";
    output.className = "error";
    return;
  }

  if (type === "guest" && code !== "EVENT131") {
    output.textContent = "Please enter the correct Access Code.";
    output.className = "error";
    return;
  }

  output.innerHTML = `
    <h2>Ticket Confirmed</h2>
    <p>${firstName} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Event Date: ${eventDate}</p>
    <p>Ticket Type: ${type}</p>
  `;
  output.className = "success";

  form.reset();
  updateCodeField();
});
