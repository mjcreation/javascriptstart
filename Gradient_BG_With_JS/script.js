var inColor = document.getElementById("inColor");
var outColor = document.getElementById("outColor");
var gradE = document.getElementById("grad");
var colorInputs = document.getElementsByName("color");

function changeGrad(){
    var cssAttributes = "background: linear-gradient(to right, " + inColor.value +" , " + outColor.value + ")";
    gradE.setAttribute("style", cssAttributes);
}

inColor.addEventListener("change", changeGrad);
outColor.addEventListener("change", changeGrad);