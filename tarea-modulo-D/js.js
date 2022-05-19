

let suma = function sumar (valor1, valor2) {

            let a = parseFloat(document.getElementById("valor1").value);
            let b = parseFloat(document.getElementById("valor2").value);
            
            var r = a + b;
            
            document.getElementById("total").value = r;
            return r;
}

// TAREA #2 CAJAS QUE CAMBIAN DE COLORES AL HACER CLICK EN EL BOTON

// Colors
const colors =['blue','green', 'red', 'violete', 'pink', 'yellow', 'orange', 'purple', 'black', 'white', 'brown'];

// BOX 1
// GET THE BUTTON AND GET THE BOX
let button1 = document.getElementById('button1');
let box1 = document.getElementById('box1');

//Add event listener
button1.addEventListener('click', function(){

    //Randonmizer
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    box1.style.background = randomColor;
})

// BOX 2
// GET THE BUTTON AND GET THE BOX
let button2 = document.getElementById('button2');
let box2 = document.getElementById('box2');

//Add event listener
button2.addEventListener('click', function(){
    
    //Randonmizer
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    box2.style.background = randomColor;
})

// BOX 3
// GET THE BUTTON AND GET THE BOX
let button3 = document.getElementById('button3');
let box3 = document.getElementById('box3');

//Add event listener
button3.addEventListener('click', function(){
    
    //Randonmizer
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    box3.style.background = randomColor;
})

// BOX 4
// GET THE BUTTON AND GET THE BOX
let button4 = document.getElementById('button4');
let box4 = document.getElementById('box4');

//Add event listener
button4.addEventListener('click', function(){
    
    //Randonmizer
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    box4.style.background = randomColor;
})

    // TAREA 3 CONVERTIR MINUTOS EN SEGUNDOS

    let segundos = 60;
    //Getting the button
    let convert = document.getElementById('convert');
    
    //Adding the event when clicking the button
    convert.addEventListener('click', function (){

            //Getting the minutes value
            let minutes = parseFloat(document.getElementById('minutes').value);

            //Converting the minutes in seconds
            let result = minutes * segundos + " segundos";

            //Getting and returning the value.
            document.getElementById("result").value = result;

            return result;
            
            
}

    )