function carregar() {
    let msg = window.document.getElementById('pla')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora São ${hora} Horas.`
    if (hora >= 0 && hora <= 12) {
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#c99978'
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#cb4805'
    } else if (hora >= 18 && hora <= 23){
        //BOA NOITE
        img.src = 'fotonoite.png' 
        document.body.style.background = '#4d3854'
    }
}
