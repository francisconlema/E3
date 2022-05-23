
// E3: Eventos y manipulación del DOM | Javascript
/* Vamos a utilizar el mismo array de objetos "Pizzas🍕" del desafío general anterior. 

👉 Crear un archivo HTML que contenga un h2, un h4, un input number y un botón. 

👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

🚨 Si no coincide con ningún id, renderizar un mensaje de error. */

const pizzas = [
    {id: 1, nombre: `muzza`, ingredientes: [`muzzarella`], precio: 500, },
    {id: 2, nombre: `jamon`, ingredientes: [`muzzarella`, `jamon`], precio: 530,},
    {id: 3, nombre: `tomate`, ingredientes: [`muzzarella`, `tomate`], precio: 550,},
    {id: 4, nombre: `salame`, ingredientes: [`muzzarella`, `salame`], precio: 580,},
    {id: 5, nombre: `roquefort`, ingredientes: [`muzzarella`, `roquefort`], precio: 610,},
    {id: 6, nombre: `palmitos`, ingredientes: [`muzzarella`, `palmitos`], precio: 650,}];


const nombrePizza = document.querySelector(`#nombrePizza`);
const precioPizza = document.querySelector(`#precioPizza`);
const idPizza = document.querySelector(`#idPizza`);
const verPizza = document.querySelector(`#verPizza`);


console.log(pizzas.id);


const limpiarFormulario = () => {
	[idPizza].forEach((input) => {
		input.value = '';
	});
};


const obtenerId = () => {
    const objeto = {
        id: idPizza.value,
        nombre: nombrePizza.value,
    };

    return objeto;
};


const mostrarId = (array,target) => {
    array.forEach((dato) => {
        const parrafe = document.createElement(`p`);
        console.log(dato);

        const keys = Object.keys(dato);
        console.log(keys);
        keys.forEach((key) => {
            const parrafodos = document.createElement(`p`);
            
            const text = document.createTextNode(key === `id` ? `${dato[key]}` : dato[key]);
            parrafodos.appendChild(text);

            parrafe.appendChild(text);
        })

        target.appendChild(parrafodos);
    });
};





