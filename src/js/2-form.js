const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
const LOCAL_KEY = "feedback-form-state";
const localData = localStorage.getItem(LOCAL_KEY);


form.addEventListener("input", onInput);
form.addEventListener("submit", onSubmit);

checkLocalData();

function checkLocalData() {
    if (localData) {
        email.value = JSON.parse(localData).email;
        message.value = JSON.parse(localData).message;
    }
    else {
        email.value = "";
        message.value = "";
    }
};


function onInput() {
    const formData = {
        email: email.value.trim(),
        message: message.value.trim()
    }
    localStorage.setItem(LOCAL_KEY, JSON.stringify(formData))
};

function onSubmit(evt) {
    evt.preventDefault();
    if (!email.value) {
        alert("Oops! You forget to add Email!")
        return
    }
    if (!message.value) {
        alert("Oops! You forget to add Message!")
        return
    }
    else {
        console.log(localStorage.getItem(LOCAL_KEY));
        localStorage.removeItem(LOCAL_KEY);
        evt.target.reset()
    }

}