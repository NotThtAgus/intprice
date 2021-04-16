for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}

var PrecioActual = document.getElementById("precio");
var CantidadActual = document.getElementById("cantidad");

function CambioPrecio() {

    var EscalonActual = document.getElementById("deslizar").value;
    var Estado = document.getElementsByClassName("BotonCambiar");

    if(Estado.id==="Off" || Estado.id==undefined){
    switch (EscalonActual) {
        case "0":
            PrecioActual.innerHTML = "8.00";
            CantidadActual.innerHTML = "10K ";
            break;
        case "1":
            PrecioActual.innerHTML = "12.00";
            CantidadActual.innerHTML = "50K ";
            break;
        case "2":
            PrecioActual.innerHTML = "16.00";
            CantidadActual.innerHTML = "100K ";
            break;
        case "3":
            PrecioActual.innerHTML = "24.00";
            CantidadActual.innerHTML = "500K ";
            break;
        case "4":
            PrecioActual.innerHTML = "36.00";
            CantidadActual.innerHTML = "1M ";
            break;
        
        default:
        console.log("Inutil")    
        break;
    }
    }
    else{
        switch (EscalonActual) {
            case "0":
                PrecioActual.innerHTML = "6.00";
                CantidadActual.innerHTML = "10K ";
                break;
            case "1":
                PrecioActual.innerHTML = "9.00";
                CantidadActual.innerHTML = "50K ";
                break;
            case "2":
                PrecioActual.innerHTML = "12.00";
                CantidadActual.innerHTML = "100K ";
                break;
            case "3":
                PrecioActual.innerHTML = "18.00";
                CantidadActual.innerHTML = "500K ";
                break;
            case "4":
                PrecioActual.innerHTML = "27.00";
                CantidadActual.innerHTML = "1M ";
                break;
            
            default:
            console.log("Inutil")    
            break;
    }
}
}

function DescuentoAplicable(){

    var ActivarClase = document.getElementsByClassName("BotonCambiar");

    if(ActivarClase.id == "Off" || ActivarClase.id == undefined){
        ActivarClase.id = "On";
    }
    else{
        ActivarClase.id = "Off";

    } 
    console.log(ActivarClase);

}