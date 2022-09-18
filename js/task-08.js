const formRef = document.querySelector(".login-form");

function handleSubmit(event) {
    event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    const message = "Заполни все поля";
    alert(message);
    return;
  }
    console.log(`Login: ${email.value}, Password: ${password.value}`)
    event.currentTarget.reset();
    }

formRef.addEventListener('submit', handleSubmit)
