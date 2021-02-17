var button = document.querySelector('.burger')
var nav = document.querySelector('.navbar')

button.addEventListener('click', function(e) {
    e.preventDefault();
    nav.classList.toggle('active')
})