function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var texto = document.getElementById('txt1')
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var dia = data.getDate();
    var mes = (data.getMonth() + 1);
    var ano = data.getFullYear();

    msg.innerHTML = `Hoje é <strong>${dia} / ${mes} / ${ano} </strong><br>
                    Agora são ${hora}:${minutos}.`
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'manha1.png'
        texto.innerHTML = `<strong> Bom Dia </strong>`;
        document.body.style.background = '#ffe26c'
    } else if(hora >= 12 && hora < 18) {
        img.src = 'tarde1.png';
        texto.innerHTML = `<strong> Boa Tarde </strong>`;
        document.body.style.background = '#e2a171'
    }else{
        img.src = 'noite1.png';
        texto.innerHTML = `<strong> Boa Noite </strong>`;
        document.body.style.background = '#3978a91'
    }
}
