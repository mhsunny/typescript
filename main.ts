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
 
var burger: string = 'hamburger',     // String 
    calories: number = 300,           // Numeric
    tasty: boolean = true;            // Boolean

// Alternatively, you can omit the type declaration:
// var burger = 'hamburger';

// The function expects a string and an integer.
// It doesn't return anything so the type of the function itself is void.

function speak(food: string, energy: number): void { 
  console.log("Our " + food + " has " + energy + " calories.");
}
 
speak(burger, calories);
