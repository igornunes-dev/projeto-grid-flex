let input = document.querySelector('.input-senha')
let senha = document.querySelector('.senha')

function change() {
  if(input.type == 'password'){
    input.type = 'text'
    senha.src = '../img/view.png'
  }else {
    input.type = 'password'
    senha.src = '../img/eye.png'
  }
}