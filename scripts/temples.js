const navigation = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', function (event) {
    hamButton.classList.toggle('open');
    navigation.classList.toggle('show');
});

const currentyear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentyear;

document.getElementById("lastModified").textContent = document.lastModified;