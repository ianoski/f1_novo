//thalita trabalhando nas classes

//Criando os controles

document.addEventListener('keydown',(e)=>{
    // console.log(e.key)
    if(e.key === 'a'){
        carro.dir -= 20
        console.log("esquerda = ",carro.dir)
    }else if(e.key === 'd'){
        carro.dir += 20
        console.log("direita = ",carro.dir)
    }
})
document.addEventListener('keyup', (e)=>{
    if(e.key === 'a'){
        carro.dir = 0
    }else if(e.key === 'd'){
        carro.dir = 0
    }
})


function desenha(){

}

function atualiza(){

}
//letícia trabalhando no porgrama principal
function main(){
    //comando de apagar a tela
    desesnha()//ianoski trabalhando no desenho
    atualiza()
}



setInterval(main,10)