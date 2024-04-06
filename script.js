const button = document.querySelector("button");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const form = document.querySelector("form");

firstName.addEventListener("input", (e) => {
    const inputValue = e.target.value;
    const regex = /^[a-zA-ZİıĞğÜüŞşÇçÖö\s]*$/;

    if (!regex.test(inputValue)) {
        e.target.value = inputValue.replace(/[^a-zA-ZİıĞğÜüŞşÇçÖö\s]/g, '');
    }
})

lastName.addEventListener("input", () => {
    const inputValue = lastName.value;
    const regex = /^[a-zA-ZİıĞğÜüŞşÇçÖö\s]*$/;

    if (!regex.test(inputValue)) {
        lastName.value = inputValue.replace(/[^a-zA-ZİıĞğÜüŞşÇçÖö\s]/g, '');
    }
})

phone.addEventListener("input", (event) => {
    const inputValue = event.target.value;
    const regex = /^5?\d{0,9}$/;

    if (!regex.test(inputValue)) {
        let formattedValue = inputValue.replace(/[^\d]/g, '');
        formattedValue = formattedValue.substring(0, 10);
        event.target.value = formattedValue;
    }
});

const showModal = () => {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
};

const closeModal = () => {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const allFieldsFilled = Array.from(form.elements).every(element => {
        return !element.required || element.value.trim() !== '';
    });

    if (allFieldsFilled) {
        showModal();
    }
});

const closeModalBtn = document.getElementById("closeModalBtn");
if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal);
}

const modal = document.getElementById("modal");
if (modal) {
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
}




