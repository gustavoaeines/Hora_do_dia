function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var horas = document.getElementById('horas')
    var img = document.getElementById('img')
    horas.innerHTML = `Agora são ${hora} horas`
    if(hora >= 6 && hora < 12){ 
        document.body.style.background = '#e2cd9f'
        img.src ='images/1manha.png'
        
    }else if(hora >= 12 && horas < 18){
        
        document.body.style.background = '#b9846f'
        img.src ='images/1tarde.png'
    }else{
        img.src ='images/1noite.png'
        document.body.style.background = '#515154'
    }
}