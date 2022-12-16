
let el = document.querySelector('.texto')


document.querySelector('.opcao').addEventListener('keydown', (e) => {
    let nValor = e.key
    el.innerHTML = `<input class="opcao" type="text" value="${nValor}">`
})



document.querySelector('button').addEventListener('click', () => {
    atualizarItem()
});



function atualizarItem() {
    let stageAlvo = document.querySelector('.opcao').value
    console.log(stageAlvo);

    
    document.querySelectorAll('.x-boundlist-item').forEach(item => {
        item.classList.remove('x-boundlist-selected')
        if (item.innerHTML === stageAlvo) {
            item.classList.add('x-boundlist-selected')
        }
    });
}