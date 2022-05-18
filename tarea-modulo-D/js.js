

let suma = function sumar (valor1, valor2) {

            let a = parseFloat(document.getElementById("valor1").value);
            let b = parseFloat(document.getElementById("valor2").value);
            
            var r = a + b;
            
            document.getElementById("total").value = r;
            return r;
}