window.onload = () => {
    f = new Date();
    fechaProxima=new Date();
    fechaActual=new Date();
    input = document.getElementById("fecha");

    document.getElementById("empezar").addEventListener('click', () => {
        document.getElementById("error").innerHTML="";
        fechaProxima=new Date(input.value); 
        if (fechaProxima > fechaActual) {
            tiempoRestante();
           
        }else{
            document.getElementById("error").innerHTML="La fecha tiene que ser mayor a la fecha actual"
        } 
    });

    document.getElementById("terminar").addEventListener('click', () => {

        clearInterval(id);
    });

}
tiempoRestante=()=>{
    var dias=0
    var horas=0
    var minutos=0
    var segundos=0

    var diferencia=Math.floor((fechaProxima.getTime()-fechaActual.getTime())/1000);

    minutos=Math.floor(diferencia/60);
    segundos=diferencia-(minutos*60);
    
    horas=Math.floor(minutos/60);
    minutos=minutos-(horas*60);
    
    dias=Math.floor(horas/24);
    horas=horas-(dias*24);
    

    document.getElementById("dias").innerHTML=dias>1||dias==0?dias+'dias':dias+'dia';
    document.getElementById("horas").innerHTML=horas>1||horas==0?horas+'horas':horas+'hora';
    document.getElementById("minutos").innerHTML=minutos>1||minutos==0?minutos+'minutos':minutos+'minuto';
    document.getElementById("segundos").innerHTML=segundos>1||segundos==0?segundos+'segundos':segundos+'segundo';
    
    
    id = setInterval(cuenta_atras, 1000); 
}
cuenta_atras = () => { 
    seg=parseInt(document.getElementById("segundos").innerHTML);
    min=parseInt(document.getElementById("minutos").innerHTML);
    hor=parseInt(document.getElementById("horas").innerHTML);
    dia=parseInt(document.getElementById("dias").innerHTML);

    if(seg>0){
        // for(let i=1; i<=segundos; i--){
        //     if(i>1){
        //         document.getElementById("segundos").innerHTML=segundos>1||segundos==0?segundos+'segundos':segundos+'segundo';
        //     }else{
        //         segundos=60;
        //         document.getElementById("minutos")-1;
        //     }
        // }

        seg--;
    }else{
        seg=60;
        document.getElementById("segundos").innerHTML=seg;

    }
    document.getElementById("segundos").innerHTML=seg;
    
}

