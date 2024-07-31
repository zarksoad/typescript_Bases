"use strict";
//Crea un tipo personalizado para un objeto Producto con propiedades id, nombre, y precio.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// type Producto = {
//     id:number; 
//     name:string;
//     price:number;
// }
// Example 
// let sum:number = 5 + 10 
// let isValid:boolean = sum > 10 && sum < 20;
// console.log(isValid,"hola");
// Practica 
// Implementa una función que determine si un número es par utilizando operadores aritméticos y booleanos
// let num:number = 10;
// let isValid:boolean = num %2 === 0;
// console.log(isValid)
// example
// let value:number = 10;
// if(value > 5){
//     console.log("Value is greater than 5");
// }
// else{
//     console.log("Value is 5 or less");
// }
// switch (value) {
//     case 10:
//       console.log("Value is 10");
//       break;
//     default:
//       console.log("Value is not 10");
//   }
// usando if.
// function validateNumber(value: number): void {
//     // Convertir el número a una categoría
//     let category: string;
//     if (value > 0) {
//       category = 'positive';
//     } else if (value < 0) {
//       category = 'negative';
//     } else {
//       category = 'zero';
//     }
//     // Usar `switch` en la categoría
//     switch (category) {
//       case 'positive':
//         console.log("The number is positive.");
//         break;
//       case 'negative':
//         console.log("The number is negative.");
//         break;
//       case 'zero':
//         console.log("The number is zero.");
//         break;
//       default:
//         console.log("Unknown category.");
//         break;
//     }
//   }
//   validateNumber(10);  
//   validateNumber(-5);   
//   validateNumber(0);  
// operador ternario es bueno usarlo en operaciones simples 
// let numbers: number[] = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// numbers.forEach(num => console.log(num));
// let squares = numbers.map(num => num * num);
// let nombres:string[]=[ "Ana",
//     "Luis",
//     "Carlos",
//     "Marta",
//     "Sofía",
//     "Juan",
//     "Elena",
//     "Pedro",
//     "Laura",
// ];
// for(let i=0;i < nombres.length;i++){
//     console.log(nombres[i])
// }
// 1 Arrays
// tarea 1 
// let numeros:number[] = [1,2,3,4,6,7]
// const suma = numeros.reduce((acumulador,numero)=> acumulador+=numero,0)
// console.log(suma)
// tarea 2 Tarea 2: Implementa una función que reciba
// un array de strings y retorne la concatenación de todos los elementos.
// function concatenar(valores:string[]){
// const concatenar = valores.reduce((acumulador:string,letra:string)=>acumulador +letra);
//  return console.log(concatenar)
// }
// concatenar(["h","o","l","a"])
// tarea 3 
// Tarea 3: Define un array de objetos 
//User con propiedades id y name, e imprime el nombre de cada usuario en consola.
// const objetos:{id:number,nombre:string}[]=[
//     { id: 1, nombre: "Ana" },
//     { id: 2, nombre: "Luis" },
//     { id: 3, nombre: "Carlos" },
//     { id: 4, nombre: "Marta" },
//     { id: 5, nombre: "Sofía" }
// ]
// let nombres = objetos.map(objeto=>objeto.nombre)
// console.log(nombres)
// Tarea 4: Implementa una función que reciba 
// un array de números y retorne el mayor valor.
// function maxNumber(array:number[]){
//     let max:number = array[0];
//    for(let i = 0;i < array.length;i++){
//     if(array[i] > max){
//         max= array[i]
//     }
//    }
//    return console.log("el numbero mayor es:",max)
// }
// maxNumber([1,2,3,4])
// para asegurar un tipo de dato , se debe poner dato y despues el array : string[]
// interface Car{
//     name:string,
//     model:number,
//     año:number
// }
// const car:Car = {
//     name:"Honda",
//     model:2024,
//     año:2022
// }
// class Carro {
//     name:string;
//     model:number;
//     año:number;
//     constructor(name:string,model:number,año:number){
//         this.name = name;
//         this.model=model;
//         this.año = año;
//     }
//     static informacion(car:Car):string{
//         return `Marca: ${car.name}, Modelo ${car.model},año ${car.año}`
//     }
// }
// console.log(Carro.informacion(car))
// interface Construir{
//     construyendo():void;
// }
// class Sala implements Construir{
//     construyendo(): void {
//         console.log("Estoy haciendo sala")
//     }
// }
// class Habitacion implements Construir{
//     construyendo(): void {
//         console.log("Estoy haciendo habitacion")
//     }
// }
// class Trabajador{
//     private name:string;
//     private construir:Construir
//     constructor(name:string,construir:Construir){
//         this.name = name,
//         this.construir = construir
//     }
//     accion():void{
//         console.log(`Mi nombre es ${this.name} y`);
//         this.construir.construyendo()
//     }
// }
// const habitacion = new Habitacion();
// const camellador = new Trabajador("lucas",habitacion);
// camellador.accion();
class DatabaseConnection {
    beginTransaction() {
        console.log("Transaction started");
    }
    commitTransaction() {
        console.log("Transaction committed");
    }
    rollbackTransaction() {
        console.log("Transaction rolled back");
    }
}
function Transactional(target, propertyName, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const dbConnection = new DatabaseConnection();
        dbConnection.beginTransaction();
        try {
            const result = originalMethod.apply(this, args);
            dbConnection.commitTransaction();
            return result;
        }
        catch (error) {
            dbConnection.rollbackTransaction();
            throw error;
        }
    };
    return descriptor;
}
class UserService {
    createUser(username, email) {
        console.log(`Creating user ${username} with email ${email}`);
        // Simulamos una operación que podría fallar
        if (!email.includes('@')) {
            throw new Error("Invalid email");
        }
        console.log(`User ${username} created successfully`);
    }
}
__decorate([
    Transactional,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], UserService.prototype, "createUser", null);
// Probando la funcionalidad
const userService = new UserService();
try {
    userService.createUser("john_doe", "john.doe@example.com");
}
catch (error) {
    if (error instanceof Error) {
        console.error("Transaction failed:", error.message);
    }
    else {
        console.error("Transaction failed:", error);
    }
}
try {
    userService.createUser("jane_doe", "jane.doeexample.com");
}
catch (error) {
    if (error instanceof Error) {
        console.error("Transaction failed:", error.message);
    }
    else {
        console.error("Transaction failed:", error);
    }
}
//# sourceMappingURL=index.js.map