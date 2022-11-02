var nombrededisco= "";
var bandadisco="";
var codigodisco ="";
var duraciondisco ="";
var canciondisco ="";
var duracioncacion ="";
var mostrarnombrededisco =[];
var mostrarbandadisco = [];
var mostrarcodigodisco = [];
var mostrarcanciondisco =[];
var mostrarduracioncacion = [];
var mostrarduraciondisco = [];


    function nombre (){
    /* validar que nombre no sea numero, ni este vacio*/
        do{
            nombrededisco = prompt("ingrese el nombre del disco");
            var nombredediscovalido = true;
            mostrarnombrededisco.push(nombrededisco);

            if(!isNaN(nombrededisco)){
                 nombredediscovalido = false;
                 alert("solo texto");
            }
            validarvacio;
        }while(!nombredediscovalido);

    }

    function banda (){
   /* validar que banda no sea numero, ni este vacio*/

        do{
            
            bandadisco = prompt("ingrese la banda o el autor del disco");
            var bandadiscovalido =true;
            mostrarbandadisco.push(bandadisco);
            

            if (!isNaN(bandadisco)){
                nombredediscovalido= false;
                alert("ingrese solo texto");

            }
            validarvacio;
        }while(!bandadiscovalido);
}

function canciones (){
    do{
            canciondisco =prompt("ingrese la cancion del disco ");
            var cancionvalida = true;
            mostrarcanciondisco.push(canciondisco);
            if (!isNaN(canciondisco)){
                cancionvalida= false;
                alert("ingrese solo texto");

            }
            validarvacio; 
       }while(!cancionvalida);      
    }  
 
    function duracion (){
        do{
                duracioncacion = Number(prompt("ingrese la duracion de la cancion del disco"));
                var duracioncacionvalido =true;
                mostrarduracioncacion.push(duracioncacion)
                if (isNaN(duracioncacion)){
                    duracioncacionvalido= false;
                    alert("ingrese solo numeros");

                }
                validarvacio;


                duraciondisco = 0;
                for(let i in mostrarduracioncacion){
                duraciondisco += mostrarduracioncacion[i];
                mostrarduraciondisco = duraciondisco;
                }return(mostrarduraciondisco.push);
            }while(!duracioncacionvalido);
        }
  

    function codigo(){
    /*validar que codigo no este vacio, que este en el rango de 1 a 999, y que no este repetido */
        do {
            codigodisco= +prompt("ingrese el codigo numerico del disco");
            var validarcodigodisco = true;
            
        
            mostrarcodigodisco.push(codigodisco);


            if(isNaN(codigodisco)){
                validarcodigodisco = false;
                alert ("Solo codigo numerico");
            
            }else if(codigodisco < 1 ||codigodisco > 999){
                validarcodigodisco = false;
                alert("ingrese datos del 1 a 999");

            }
            
           
            validarexitecodigo;

           
             validarvacio;

        }while(!validarcodigodisco);

    }



        /* Mostrar datos de los discos cargados, duracion del disco, en rojo los discos que dures mas de 180 seguntos. Ademas ayudar al usuario mostrando con alert cada error qu puede llegar a tener*/
     
        function mostrar (){
    
            /* Mostrar datos de los discos cargados, duracion del disco, en rojo los discos que dures mas de 180 seguntos. Ademas ayudar al usuario mostrando con alert cada error qu puede llegar a tener*/
         
          
            for (let i in mostrarnombrededisco){
          
            var h2 = document.querySelector(".bloque h2");
            h2.innerText = `${mostrarnombrededisco[i]}`;
            h2.style.Color = "rebeccapurple";
            h2.style.border = "4px solid white";
            h2.style.boxShadow = "0 0 6px 0 rgba(55, 52, 52, 0.8)";
            h2.style.margin = "20px"; 
            h2.style.width = "400px";

    
            var h3 = document.querySelector(".bloque h3");
            h3.innerText = `${mostrarbandadisco}`;
            h3.style.Color = "rebeccapurple";
            h3.style.border = "4px solid white";
            h3.style.width = "400px";
            h3.style.height = "auto"; 
            h3.style.margin = "20px"; 

            
            var p = document.querySelector(".bloque p");
            p.innerText = `las canciones del disco son ${mostrarcanciondisco} 
             la duracion todal del disco es ${mostrarduraciondisco} 
            el codigo del disco es ${mostrarcodigodisco}`; 
            p.style.backgroundColor = "rgba(240, 255, 255, 0.644)";
            p.style.width = "400px";
            p.style.height = "300px"; 
            p.style.margin = "20px"; 

            if (mostrarduraciondisco >= 180)
            p.style.color = "red";
            }
    
        }



    function validarvacio(){
        if(nombrededisco === "" || bandadisco === "" || codigodisco === "" || canciondisco === "" || duracioncacion === ""){
            alert("todos los campos deben estar completos");
        }

    }
    function validarexitecodigo(){
    
        for (let i in mostrarcodigodisco) {
                var validarcodigodisco = true;
                if (codigodisco === mostrarcodigodisco[i]) {
                alert("El codigo del disco ya esta cargado");
                validarcodigodisco = false;
                }
        }return (validarcodigodisco); 
    }