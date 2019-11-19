//compile the .ts file to .js file
//https://tutorialzine.com/2016/07/learn-typescript-in-30-minutes

// tsc main.ts
// We can also compile multiple files at once by listing all of them or by applying wildcards:

// # Will result in separate .js files: main.js worker.js.
// tsc main.ts worker.ts    

// # Compiles all .ts files in the current folder. Does NOT work recursively.
// tsc *.ts
// We can also use the --watch option to automatically compile a TypeScript file when changes are made:

// # Initializes a watcher process that will keep main.js up to date.
// tsc main.ts --watch


export {}
var message:string = "Hello World" 
 
let message2 = 'This is test...';
 
let sum;

const title = "Sunny Learning Code";

let isBeginner: boolean = true;
let total: number = 0;

let name: string = "sunny";

let sentence : string = `my name is ${name}
I am a  beggainer with typescript`; 

let n: null = null;

let u: undefined = undefined; 

let isNew: Boolean = null;

let myname : string = undefined;

//array
let listArray : number[] = [1,2,3];
let listArr2 : Array<number> = [1,2,3];

let person1: [string, number] = ['chirs', 23];

let array3 : Array<number> = [1, 2, 7];

enum Color {Red, Green, Blue};

let c: Color  = Color.Blue;
 
// enum color{Red, Green, Blue};

// let mycolor : color = color.Green;
let myval : unknown = 10; 
 
function hasName(obj: any): obj is {name: string} {

    return !!obj && typeof obj === "object" && "name" in obj
}

if(hasName(myval)){

    console.log(myval.name);
}

let a ;
a = 10;
a  = true;

let b  = 20 ; 

let multiType : number | boolean;
multiType = 20;
multiType= true;
let anyT : any;
anyT = 20;
anyT = true; 