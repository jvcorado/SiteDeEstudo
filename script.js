function black(){
    document.querySelector('.cabecalho').classList.remove('white')
    document.querySelector('.cabecalho').classList.add('black')  
    document.querySelector('body').classList.remove('white')
    document.querySelector('body').classList.add('black') 
 
}

function white(){
    document.querySelector('.cabecalho').classList.remove('black')
    document.querySelector('.cabecalho').classList.add('white')
}