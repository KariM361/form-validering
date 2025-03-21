// husk en funktion til at finde min ramme/kasse(nav)

// funktion togglevisible() {
//     const mySection=document.getElementById('box');
//    mySection.classList.toggle('hidden');
//   }

document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Forhindrer formularen i at sende

  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let isValid = true;

  // Tøm tidligere fejlmeddelelser
  document
    .querySelectorAll('.error-message')
    .forEach((el) => (el.textContent = ''));

  if (name.value.trim() === '') {
    name.classList.add('error');
    name.nextElementSibling.textContent = 'Navn skal udfyldes';
    isValid = false;
  } else {
    name.classList.remove('error');
  }

  if (!email.value.includes('@')) {
    email.classList.add('error');
    email.nextElementSibling.textContent = 'Indtast en gyldig email';
    isValid = false;
  } else {
    email.classList.remove('error');
  }

  if (isValid) {
    alert('Formularen er korrekt udfyldt!');
    this.submit(); // Send formularen hvis alt er OK
  }
});
