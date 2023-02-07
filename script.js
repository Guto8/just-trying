var $lista = document.querySelector('ul');
var $produto = document.querySelector('#produto');
var $botao = document.querySelector('#btn');

$botao.addEventListener('click', addproduto);

function addproduto() {
    var item = '<li>' + $produto.value + '</li>';
    $lista.innerHTML +=item;
    $produto.value = '';
    $produto.focus();


}

$produto.addEventListener('keyup', function(e){
   if (e.keyCode === 13) {
      addproduto()
   }
})
