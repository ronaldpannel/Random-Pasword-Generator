const button = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const copyAlertEl = document.querySelector(".alertContainer");

const characters =
  "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function createPassword() {
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const passwordLength = 14;
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomNum = Math. round(Math.random() * characters.length);
    password += characters.substring(randomNum, randomNum + 1);
  }
  inputEl.value = password;
  copyAlertEl.innerText = `${password} Copied`;
}

function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 999);
  navigator.clipboard.writeText(inputEl.value);

}

button.addEventListener("click", () => {
  createPassword();
});
copyIconEl.addEventListener("click", () => {
  copyPassword();
  if(inputEl.value){
     copyAlertEl.classList.remove("active");
     setTimeout(() => {
       copyAlertEl.classList.add("active");
     }, 2000);
  }
  
});
