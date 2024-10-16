const name = document.querySelector('#name');
const img = document.querySelector('#profile');

const btnSubmit = document.querySelector('#submit');

const display = document.querySelector('#display');



btnSubmit.addEventListener('click', ()=> {
    const nameValue = name.value;
    const file = img.files;

    display.innerHTML = `<img src="${URL.createObjectURL(file[0])}" />`

    // console.log(file);
})




