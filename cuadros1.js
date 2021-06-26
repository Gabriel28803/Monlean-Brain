/*verificacion de tamaño de pantalla, si es inferior a cierta cantidad de px, quito los cuadros*/
/*Aqui el contenedor de los cuadros de informacion*/
let pagina1 = document.querySelector(".pagina1")
let contenedorCuadros = document.querySelector(".pagina1__container--cuadros");
if (window.screen.height <= 730){
	contenedorCuadros.style.display= "none";
	pagina1.style.flexDirection = "column";
}

/*Aqui selecciono las flechas*/

/*Flechas de la pagina 1*/
let dplzAbajo1 = document.querySelector(".flecha-derecha1");

/*Flechas de la pagina 2*/
let dplzArriba2 = document.querySelector(".flecha-izquierda2");
let dplzAbajo2 = document.querySelector(".flecha-derecha2");

/*Flechas de la pagina 3*/
let dplzArriba3 = document.querySelector(".flecha-izquierda3");

/*Aqui la selecion de los botones de mas informacion*/
let boton1 = document.querySelector(".boton1");
let boton2 = document.querySelector(".boton2");
let boton3 = document.querySelector(".boton3");

/*Aqui los cuadros de informacion*/
let cuadro1 = document.querySelector(".pagina1__cuadro1");
let cuadro2 = document.querySelector(".pagina1__cuadro2");
let cuadro3 = document.querySelector(".pagina1__cuadro3");
let cuadros = [cuadro1, cuadro2, cuadro3];
let desplazamiento = 0;


/*Funciones para hacer que los cuadros se muevan*/
const moverIzquierda = ()=>{
	if (abierto){
		cerrarTodo();
	}
	desplazamiento += 350;
	for (cuadro in cuadros){
		cuadros[cuadro].style.transform = `translateX(${desplazamiento}px)`;
	}
	
}
const moverDerecha = ()=>{
	if (abierto){
		cerrarTodo();
	}
	desplazamiento -= 350;
	for (cuadro in cuadros){
		cuadros[cuadro].style.transform = `translateX(${desplazamiento}px)`;
	}
}

/*Adicion de eventos para ejecutar las funciones de arriba respectivamente*/

/*Flechas de la casilla 1*/
dplzAbajo1.addEventListener("click", ()=>moverDerecha())

/*Flechas de la casilla 2*/
dplzArriba2.addEventListener("click", ()=>moverIzquierda());
dplzAbajo2.addEventListener("click", ()=>moverDerecha());

/*Flechas de la casilla 3*/
dplzArriba3.addEventListener("click", ()=>moverIzquierda());

/*De aqui en adelante irá el funcionamiento y expancion de estos cuadros*/
let infoCuadro1 = document.querySelector(".pagina1__cuadro1--informacion");
let infoCuadro2 = document.querySelector(".pagina1__cuadro2--informacion");
let infoCuadro3 = document.querySelector(".pagina1__cuadro3--informacion");
let infoCuadros = [infoCuadro1, infoCuadro2, infoCuadro3];

abierto = false;
let mostrarInfo = (id)=>{
	if (abierto){
		abierto = false;
		contenedorCuadros.style.height = "240px";
		cuadros[id].style.height = "240px";
		infoCuadros[id].style.display = "none";
	}
	else {
		abierto = true;
		contenedorCuadros.style.height = "450px";
		cuadros[id].style.height = "450px";
		infoCuadros[id].style.display = "block";
	}
}
let cerrarTodo = ()=>{
	contenedorCuadros.style.height = "240px";
	for (cuadro in cuadros){
		cuadros[cuadro].style.height = "240px";
		infoCuadros[cuadro].style.display = "none";
	}
}

boton1.addEventListener("click", ()=>mostrarInfo(0));
boton2.addEventListener("click", ()=>mostrarInfo(1));
boton3.addEventListener("click", ()=>mostrarInfo(2));