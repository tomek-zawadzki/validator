const userName = document.querySelector(".user");
const password = document.querySelector(".password");
const repeatPassword = document.querySelector(".repeat-password");
const mail = document.querySelector(".mail");
const clearBtn = document.querySelector(".clear");
const sendBtn = document.querySelector(".send");
const imputBox = document.querySelector(".input-box");

const inputArr = [userName, password, repeatPassword, mail];

/*
sendBtn.addEventListener("click", () => {
  if (userName.value.length > 4) {
    console.log("ok");
  } else {
    const p = document.createElement("p");
    p.innerText = "Nazwa użytkownika składa się z min. 3 znaków.";
    p.classList.add("prompter");
    imputBox.appendChild(p);
  }
  if (password.value.length > 8) {
    console.log("ok");
  } else {
    const p = document.createElement("p");
    p.innerText = "Hasło składa się z min. 8 znaków";
    p.classList.add("prompter");
    imputBox.appendChild(p);
  }
  if (repeatPassword.value !== password.value) {
    console.log("ok");
  } else {
    const p = document.createElement("p");
    p.innerText = "Hasła się nie zgadzają!";
    p.classList.add("prompter");
    imputBox.appendChild(p);
  }
  // if (mail.value === ) {
  //   console.log("ok");
  // } else {
  //   const p = document.createElement("p");
  //   p.innerText = "Nazwa użytkownika składa się z min. 3 znaków.";
  //   p.classList.add("prompter");
  //   imputBox.appendChild(p);
  // }
});
*/

const showError = (input, msg) => {
  const formBox = input.parentElement;
  const errorMsg = formBox.querySelector(".error-text");

  formBox.classList.add("error");
  errorMsg.textContent = msg;
};

const clearError = (input) => {
  const formBox = input.parentElement;
  formBox.classList.remove("error");
};

const checkForm = (input) => {
  input.forEach((el) => {
    if (el.value === "") {
      showError(el, el.placeholder);
    } else {
      clearError(el);
    }
  });
};

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();

  checkForm(inputArr);
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();

  inputArr.forEach((el) => {
    el.value = "";
  });
});
