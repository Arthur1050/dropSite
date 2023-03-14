window.addEventListener('load', ev => {
    document.querySelectorAll('.nextImgCarr').forEach(btn => btn.addEventListener('click', ev => nextImgCarr(ev)));

    document.querySelectorAll('.previousImgCarr').forEach(btn => btn.addEventListener('click', ev => previousImgCarr(ev)));
    document.querySelector('.imgContainer.viewImg').scrollIntoView({block: 'center', behavior: 'smooth', inline: 'center'});
})

document.addEventListener('load', () => {
})

function nextImgCarr(ev) {
    let imgAtual = ev.target.parentNode.querySelector('.viewImg');
    let proxImg = imgAtual.nextElementSibling;
    let containerImg = ev.target.previousElementSibling;
    let flexImgs = [...containerImg.children][0];

    imgAtual.classList.remove('viewImg');
    proxImg.classList.add('viewImg');

    flexImgs.insertAdjacentElement(
        'beforeend', 
        [...flexImgs.children][0]
    )

    imgAtual.scrollIntoView({block: 'center', inline: 'center'});
    proxImg.scrollIntoView({block: 'center', behavior: 'smooth', inline: 'center'});
}

function previousImgCarr(ev) {
    let imgAtual = ev.target.parentNode.querySelector('.viewImg');
    let proxImg = imgAtual.previousElementSibling ;
    let containerImg = ev.target.nextElementSibling;
    let flexImgs = [...containerImg.children][0];
    
    imgAtual.classList.remove('viewImg');
    proxImg.classList.add('viewImg');

    flexImgs.insertAdjacentElement(
        'afterBegin', 
        [...flexImgs.children][flexImgs.childElementCount - 1]
    )

    imgAtual.scrollIntoView({block: 'center', inline: 'center'});
    proxImg.scrollIntoView({block: 'center', behavior: 'smooth', inline: 'center'});
}