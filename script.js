// 1. getElementById()
const form = document.getElementById("enrollmentForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const age = document.getElementById("age");
const phone = document.getElementById("phone");
const birthdate = document.getElementById("birthdate");
const course = document.getElementById("course");
const skillLevel = document.getElementById("skillLevel");
const bio = document.getElementById("bio");

const outputCard = document.getElementById("outputCard");

const skillLevelOut = document.getElementById("skillLevelOut");
const clearBtn = document.getElementById("clearBtn");

// 2. getElementsByClassName()
const hobbyChecks = document.getElementsByClassName("hobby-check");

// Update skill level number
skillLevel.addEventListener("input", function () {
  skillLevelOut.textContent = skillLevel.value;
});

// Reset skill level display and card
clearBtn.addEventListener("click", function () {
  setTimeout(function () {
    skillLevelOut.textContent = skillLevel.value;

    outputCard.classList.add("id-card--empty");

    outputCard.innerHTML = `
      <div class="id-card__topline">
        <span>CCS DEPARTMENT</span>
      </div>

      <div class="id-card__empty-state">
        <p>No data yet.</p>
        <p class="muted">
          Fill in the form and press "Show My Info" to generate your card.
        </p>
      </div>
    `;
  }, 0);
});

// Submit form
form.addEventListener("submit", function (event) {
  // Prevent page reload
  event.preventDefault();

  // 3. querySelector()
  const gender = document.querySelector('input[name="gender"]:checked');

  const genderValue = gender ? gender.value : "Not specified";

  // Get selected hobbies
  let hobbies = [];

  for (let i = 0; i < hobbyChecks.length; i++) {
    if (hobbyChecks[i].checked) {
      hobbies.push(hobbyChecks[i].value);
    }
  }

  // 4. querySelectorAll()
  const fields = document.querySelectorAll(".field");

  const hobbyText = hobbies.length > 0 ? hobbies.join(", ") : "None";

  // Display information on the card
  outputCard.classList.remove("id-card--empty");

  outputCard.innerHTML = `
    <div class="id-card__topline">
      <span>CCS DEPARTMENT</span>
    </div>

    <div class="id-card__content">

      <h3>${fullName.value}</h3>

      <p>
        <strong>Course:</strong>
        ${course.value}
      </p>

      <p>
        <strong>Email:</strong>
        ${email.value}
      </p>

      <p>
        <strong>Age:</strong>
        ${age.value}
      </p>

      <p>
        <strong>Phone:</strong>
        ${phone.value}
      </p>

      <p>
        <strong>Birthdate:</strong>
        ${birthdate.value}
      </p>

      <p>
        <strong>Gender:</strong>
        ${genderValue}
      </p>

      <p>
        <strong>Hobbies:</strong>
        ${hobbyText}
      </p>

      <p>
        <strong>Coding Skill:</strong>
        ${skillLevel.value}/10
      </p>

      <p>
        <strong>Bio:</strong>
        ${bio.value}
      </p>

    </div>
  `;

  // Scroll to generated card
  outputCard.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
