const clearBtn = document.querySelector('.btn-2');

function onClear () {
    const para = document.querySelector('p');

    para.innerHTML = '';
}

clearBtn.addEventListener('clear', onClear);