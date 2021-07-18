const btn = document.querySelector(".btn"),
  form = document.querySelector("form"),
  name = document.querySelector("#fullName"),
  phNo = document.getElementById("contact"),
  email = document.querySelector("#email"),
  password = document.getElementById("password"),
  address = document.getElementById("address"),
  religion = document.querySelector("#religions"),
  point = document.querySelector("#points"),
  dob = document.querySelector("#dob"),
  output = document.querySelector("#outText");

//event
form.addEventListener("submit", collectData);

function collectData(e) {
  //   e.preventDefault();
  let hyper = `<p> I am ${name.value} 
   , I am from ${address.value} 
    my email is ${email.value}
  </p>

  <h3>My hobbies are :</h3>
    <ul>${getHobbies()}</ul>

    <h4> Gender : ${getGender()} </h4>
    <h4> Phone No : ${phNo.value} </h4>
    
  `;

  console.log(hyper);
  output.innerHTML = hyper;
  console.log(getHobbies());
  //   console.log(output);
  //   console.log(email.value);
  //   console.log(getHobbies()[1]);
}

function getGender() {
  const genderElement = document.getElementsByName("gender");
  let gender;
  for (let i = 0; i < genderElement.length; i++) {
    if (genderElement[i].checked) {
      gender = genderElement[i].value;
    }
  }
  return gender;
}

function getHobbies() {
  var hobbies = [];
  let parse = ``;
  var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  if (checkboxes.length > 0) {
    for (var i = 0; i < checkboxes.length; i++) {
      hobbies.push(checkboxes[i].value);
    }
    hobbies.forEach((h) => {
      parse += `<li> ${h}</li>`;
    });
    return parse;
  } else {
    parse = `<li> No hobbies selected</li>`;
    return parse;
  }
}

function BirthDate() {
  let bDate = new Date(dob.value);
  return bDate.getFullYear();
}

function ageCalculate(yourYear) {
  let today = new Date();
  let todayYear = today.getFullYear();
  return todayYear - yourYear;
}
