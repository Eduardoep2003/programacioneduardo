function calcula_gravedad() {
    var Rt = 6.37e3 * 1e3; // Convertir km a m
    var g = 9.81; // Gravedad en la superficie de la Tierra
    var gr = 1; // Gravedad deseada
    var r = Rt * Math.sqrt(g / gr); // Calcular la distancia radial

    var distancia_superficie = r - Rt; // Distancia desde la superficie de la Tierra

    var resultado = document.getElementById("resultadoA");
    resultado.innerHTML = distancia_superficie.toFixed(2) + " metros";
}
