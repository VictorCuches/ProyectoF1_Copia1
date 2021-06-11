
var contenido 
var btn_Orden = document.getElementById("ordenar");
btn_Orden.addEventListener("click", hola,true);

function hola(){
    console.log(contenido)
}



function readFile(evento){
    let archivo = evento.target.files[0];

    if (archivo){
        let reader = new FileReader();
        reader.onload = function(e){
            contenido = e.target.result;

            // console.log(contenido)
            console.log("-----------")

        };
        reader.readAsText(archivo);

        
    } else {
        alert("No se ha seleccionado ningun archivo");
    }



}


window.addEventListener('load', ()=>{
    document.getElementById('file').addEventListener('change',readFile)
});

