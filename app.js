const userName = document.querySelector(".user");
const password = document.querySelector(".password");
const repeatPassword = document.querySelector(".repeat-password");
const mail = document.querySelector(".mail");
const clearBtn = document.querySelector(".clear");
const sendBtn = document.querySelector(".send");
const imputBox = document.querySelector(".input-box");

const inputArr = [userName, password, repeatPassword, mail];

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

const checkLength = (input, min) => {
  if (input.value.length < min) {
    showError(
      input,
      `${input.previousElementSibling.innerText.slice(
        0,
        -1
      )} składa się z min. ${min} znaków`
    );
  }
};

const checkPassword = (pass1, pass2) => {
  if (pass1.value !== pass2.value) {
    showError(pass2, "Hasła do siebie nie pasują");
  }
};

const checkMail = (mail) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(mail.value)) {
    clearError(mail);
  } else {
    showError(mail, "E-mail jest niepoprawny");
  }
};

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();

  checkForm(inputArr);
  checkLength(userName, 3);
  checkLength(password, 8);
  checkPassword(password, repeatPassword);
  checkMail(mail);
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();

  inputArr.forEach((el) => {
    el.value = "";
  });
});
