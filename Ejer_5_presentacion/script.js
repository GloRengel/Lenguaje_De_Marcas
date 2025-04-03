
//Animación básica
const profileImage = document.getElementById('imagen');
//Esta es la imagen que sale cuando ponemos el ratón encima
profileImage.addEventListener('mouseover', () => {
    profileImage.style.boxshadow = '0 0px 1000px (246, 20, 20, 05)';
    profileImage.src = "img2.jpg";
});
//Esta imagen sale cuando dejamos de poner el ratón encima
profileImage.addEventListener('mouseout', () => {
    profileImage.style.boxShadow = 'none';
    profileImage.src = "b99c1c49-84c2-4972-a9c3-778c0d66ae31.png";
});


//Creamos un boton que cambia de color nuestro nombre
//Cada vez que lo pulsamos cambia de color entre negro y verde
//Creamos la constante que usaremos para los eventos, es sobre el boton
const nameColorButton = document.getElementById('bt');
//Creamos otra variable el elemento al que le quiero aplicar el estilo
const titleName = document.getElementById('nombre');
    //Creamos el evento del click, cuando clicamos hace el evento

    //Creamos una variable para que contenga lo que tenemos en el nombre
    //Esta variable tiene que ir fuera de la función
    const Name = titleName.textContent; 
                                            //Los parentesis y flechas () => 
                                            //hace lo mismo que poner function()
    nameColorButton.addEventListener('click', function() {

        //Esto sirve para que veamos que el boton funciona
        //console.warn sale en la consola
        console.warn('click------------------')
        //El alert sale con una ventanita
        //alert('esta funcionando, todo bien')
        
        if (titleName.style.color === "") {
            titleName.style = "color:green; font-style: italic";
            //Ahora vamos a meterle que también cambie el contenido del nombre
                                    //Se pueden meter etiquetas de HTML dentro de lo que cambiamos en java
            titleName.innerHTML  = "<br><br>1ºDAW";
            //titleName.textContent = "1ºDAW";

        } else {
            titleName.style = "";
            //Ponemos que cuando le vuelvas a dar al click ponga el nombre que estaba antes
            //titleName.textContent = Name;
            titleName.innerHTML = Name;
        }
        


        /*if (titleName.style.color == '') { 
            titleName.style.color == "color: green";
            titleName.style.font ==  "font-style: italic";
        }else {
            titleName.style == '';
        }*/
        
    });



const OcultarNameButton = document.getElementById('botonom');


    OcultarNameButton.addEventListener('click', () => {

        console.warn('click------------------')
        if(titleName.style.display === "none") {
            titleName.style.display = "block";
        } else {
            titleName.style.display = "none";
        }

    });




const ContactoButton = document.getElementById('contacto');
const ContenidoContButton = document.getElementById('contantForm');


ContactoButton.addEventListener('click', () => {

    console.warn('click------------------')
    if(ContenidoContButton.style.display === "block") {
        ContenidoContButton.style.display = "none";
    } else {
        ContenidoContButton.style.display = "block";
    }

});




/*
//Creamos un boton que cuando pasa sobre el se cambia de color
//Cosecha propia
const sobremiColorButton = document.getElementById('sobremi');
    sobremiColorButton.addEventListener('mouseover', () => {
        sobremiColorButton.style.color = 'white';
    });

    sobremiColorButton.addEventListener('mouseout', () => {
        sobremiColorButton.style.color = 'black';
    });
*/

//EN JAVASCRIPT HAY 3 MANERAS DE CREAR VARIABLES: CONT, LET, VAR

