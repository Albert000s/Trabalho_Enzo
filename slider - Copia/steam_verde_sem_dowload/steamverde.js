let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

btnNext.onclick = () => moveItemsOnClick('next')
btnBack.onclick = () => moveItemsOnClick('back')

function moveItemsOnClick(type){
    let listItems = document.querySelectorAll('.list .list-item')
    let thumbItems = document.querySelectorAll('.thumb .thumb-item')
    
    if(type == 'next'){
       list.appendChild(listItems[0])
       thumb.appendChild(thumbItems[0])
       container.classList.add('next')
    } else {
        list.prepend(listItems[listItems.length - 1])
        thumb.prepend(thumbItems[thumbItems.length - 1])
        container.classList.add('back')
    }

    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000)
}

document.querySelectorAll('.install-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('modal').style.display = 'flex';
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('install-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name && email) {
        document.getElementById('download-link').href = 'https://example.com/download';
        document.getElementById('download-link').style.display = 'block';
        alert('Formulário enviado! Agora você pode baixar o jogo.');
    }
});