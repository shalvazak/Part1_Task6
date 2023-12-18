const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const span = document.getElementById('closeBtn');

btn.addEventListener('click', function () {
    modal.style.display = 'block';
});

span.addEventListener('click', function () {
    modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});