const button = document.querySelector("button");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const phone = document.getElementById("phone");

/* button.addEventListener("click", () => {
    alert("Mesajınız Gönderildi. ✅\nEn kısa sürede geri dönüş yapacağız. 😊");
}) */

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


phone.addEventListener("input", function (event) {
    const inputValue = event.target.value;
    const regex = /^5?\d{0,9}$/;

    if (!regex.test(inputValue)) {
        let formattedValue = inputValue.replace(/[^\d]/g, '');
        formattedValue = formattedValue.substring(0, 10);
        event.target.value = formattedValue;
    }
});

const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const closeXBtn = document.querySelector(".close");

openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
});

closeModalBtn.addEventListener("click", closeModal);

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});

function closeModal() {
    modal.style.display = "none";
}

