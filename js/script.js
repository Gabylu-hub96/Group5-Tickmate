// Header layout change toggle
const layoutChange = document.getElementById("layout-change");
console.log(layoutChange)

layoutChange.onclick  = (e) => {
    const layoutOptions = document.getElementsByClassName("layout-options")[0];
    layoutOptions.classList.toggle("is-open");
    layoutChange.classList.toggle("active");
    console.log(e.target.innerText);
    if (e.target.innerText === 'CHANGE LAYOUT') {
        e.target.innerText = 'SAVE SELECTION';
    } else {
        e.target.innerText = 'CHANGE LAYOUT';
    }
} 

// Program to select new background
let imageClickListener1 = document.getElementsByClassName('image-selector')[0];
let imageClickListener2 = document.getElementsByClassName('image-selector')[1];
let imageClickListener3 = document.getElementsByClassName('image-selector')[2];
let imageClickListener4 = document.getElementsByClassName('image-selector')[3];


imageClickListener1.addEventListener('click', function (e) {
    changeBackground('images/background-1.jpg');
    imageClickListener1.classList.add('active');
    imageClickListener2.classList.remove('active');
    imageClickListener3.classList.remove('active');
    imageClickListener4.classList.remove('active');

});

imageClickListener2.addEventListener('click', function (e) {
    changeBackground('images/background-2.jpg');
    imageClickListener1.classList.remove('active');
    imageClickListener2.classList.add('active');
    imageClickListener3.classList.remove('active');
    imageClickListener4.classList.remove('active');

});

imageClickListener3.addEventListener('click', function (e) {
    changeBackground('images/background-3.jpg');
    imageClickListener1.classList.remove('active');
    imageClickListener2.classList.remove('active');
    imageClickListener3.classList.add('active');
    imageClickListener4.classList.remove('active');

});

imageClickListener4.addEventListener('click', function (e) {
    changeBackground('images/background-4.jpg');
    imageClickListener1.classList.remove('active');
    imageClickListener2.classList.remove('active');
    imageClickListener3.classList.remove('active');
    imageClickListener4.classList.add('active');

});

// change background image
const changeBackground = (background) => {
    let bodyTag = document.getElementById('tasks');
    bodyTag.style.backgroundImage = 'url('+background+')';
}