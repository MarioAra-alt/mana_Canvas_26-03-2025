var canvas_tres = document.getElementById("lienzo-tres");
var canvas_cuatro = document.getElementById("lienzo-cuatro");
var canvas_cinco = document.getElementById("lienzo-cinco");

if(canvas_tres.getContext){
    console.log("si se soporta la propiedad getContext");

    var cts_3 = canvas_tres.getContext("2d");

    ctx_3.fillStyle = "rgb(200,0,0)";
    ctx_3.fillRect(10,10,55,50);

    ctx_3.fillStyle = "rgba(0,0,200,0.5)";
    ctx_3.fillRect(10,10,55,50);

    ctx_3.fillStyle = "rgba(0,200,0,0.5)";
    ctx_3.fillRect(10,10,55,50);

}else{
    console.log("no se soporta getContext");
}

if(canvas_cuatro.getContext){
    console.log("si se soporta la propiedad getContext");
    var ctx_4 = canvas_cuatro.getContext("2d");

    ctx_4.beginPath();
    ctx_4.moveTo(5,5);
    ctx_4.lineTo(125,125);
    ctx_4.strokeStyle = 



}
