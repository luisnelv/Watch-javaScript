
    const mostrarReloj = ()=>{
    let fecha = new Date();
    let hour = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let sec = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML= `${hour}:${min}:${sec}`;  

    const meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    const dias = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let diaSemana = dias[fecha.getDay()];
    let mes = meses[fecha.getMonth()];
    let dia = fecha.getDate();
    let fechaTexto = `${diaSemana},${mes},${dia}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = (hora)=>{
if(hora < 10)
    hora = '0' + hora;
    return hora;


}

setInterval(mostrarReloj,1000);