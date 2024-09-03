function processSubmit(e) {
    e.preventDefault();
    const formName1 = document.querySelector("#forename");
    const formName2 = document.querySelector("#surname");
    const formEmail = document.querySelector("#email");
    const formMessage = document.querySelector("#message");

    const message = {
        name1: formName1.value,
        name2: formName2.value,
        email: formEmail.value,
        message: formMessage.value
    };

    const serialisedMessage = JSON.stringify(message);

    const fetchOptions = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: serialisedMessage
    }

    fetch("http://localhost:3000/form", fetchOptions)
    .then(onResponse)
    .then(submitOk)
    .then(onError);

}

function onError(err) {
    console.log(err);
}

function submitOk(text) {
    alert("Thank you for signing up to our newsletter! An email is on the way.")
    
}

function onResponse(onResponse) {
    return onResponse.text();
}

const form = document.querySelector("#form");
form.addEventListener("submit", processSubmit);

