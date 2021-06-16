/*Aqui selecciono las flechas*/

/*Flechas de la pagina 1*/
let dplzAbajo1 = document.querySelector(".flecha-derecha1");

/*Flechas de la pagina 2*/
let dplzArriba2 = document.querySelector(".flecha-izquierda2");
let dplzAbajo2 = document.querySelector(".flecha-derecha2");

/*Flechas de la pagina 3*/
let dplzArriba3 = document.querySelector(".flecha-izquierda3");


/*Aqui los cuadros de informacion*/
let cuadro1 = document.querySelector(".pagina1__cuadro1");
let cuadro2 = document.querySelector(".pagina1__cuadro2");
let cuadro3 = document.querySelector(".pagina1__cuadro3");
let cuadros = [cuadro1, cuadro2, cuadro3];
let desplazamiento = 0;

/*Funciones para hacer que los cuadros se muevan*/
const moverArriba = ()=>{
	desplazamiento += 240;
	for (cuadro in cuadros){
		cuadros[cuadro].style.transform = `translateY(${desplazamiento}px)`;
	}
	
}
const moverAbajo = ()=>{
	desplazamiento -= 240;
	for (cuadro in cuadros){
		cuadros[cuadro].style.transform = `translateY(${desplazamiento}px)`;
	}
}

/*Adicion de eventos para ejecutar las funciones de arriba respectivamente*/

/*Flechas de la casilla 1*/
dplzAbajo1.addEventListener("click", ()=>moverAbajo())

/*Flechas de la casilla 2*/
dplzArriba2.addEventListener("click", ()=>moverArriba());
dplzAbajo2.addEventListener("click", ()=>moverAbajo());

/*Flechas de la casilla 3*/
dplzArriba3.addEventListener("click", ()=>moverArriba());