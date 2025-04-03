
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
                                            //Los parentesis y flechas () => 
                                            //hace lo mismo que poner function()
    nameColorButton.addEventListener('click', function() {

        //Esto sirve para que veamos que el boton funciona
        //console.warn sale en la consola
        console.warn('click------------------')
        //El alert sale con una ventanita
        alert('esta funcionando, todo bien')
        
        if (titleName.style.color === "") {
            titleName.style = "color:green; font-style: italic";
        } else {
            titleName.style = ""
        }
        


        /*if (titleName.style.color == '') { 
            titleName.style.color == "color: green";
            titleName.style.font ==  "font-style: italic";
        }else {
            titleName.style == '';
        }*/
        
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

