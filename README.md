"Typescript basic and advanced" 

 how to compile typescript file to javascript file 
 
        Compiling to JavaScript
        TypeScript is written in .ts files (or .tsx for JSX), which can't be used directly in the browser and need to be translated to vanilla .js first. This compilation process can be done in a number of different ways:
        
        In the terminal using the previously mentioned command line tool tsc.
        Directly in Visual Studio or some of the other IDEs and text editors.
        Using automated task runners such as gulp.
        We found the first way to be easiest and most beginner friendly, so that's what we're going to use in our lesson.
        
        The following command takes a TypeScript file named main.ts and translates it into its JavaScript version main.js. If main.js already exists it will be overwritten.
        
        tsc main.ts
        The following command takes a TypeScript file named main.ts and translates it into its JavaScript version main.js. If main.js already exists it will be overwritten.

tsc main.ts
We can also compile multiple files at once by listing all of them or by applying wildcards:

Will result in separate .js files: main.js worker.js.
tsc main.ts worker.ts    

  Compiles all .ts files in the current folder. Does NOT work recursively.
tsc *.ts
We can also use the --watch option to automatically compile a TypeScript file when changes are made:

  Initializes a watcher process that will keep main.js up to date.
tsc main.ts --watch


<h2>Compilation typescript Keywords</h2>


Compiler Flags
Compiler flags enable you to change the behavior of the compiler during compilation. Each compiler flag exposes a setting that allows you to change how the compiler behaves.

The following table lists some common flags associated with the TSC compiler. A typical command-line usage uses some or all switches.

S.No.	Compiler flag & Description
1.	
--help

Displays the help manual

2.	
--module

Load external modules

3.	
--target

Set the target ECMA version

4.	
--declaration

Generates an additional .d.ts file

5.	
--removeComments

Removes all comments from the output file

6.	
--out

Compile multiple files into a single output file

7.	
--sourcemap

Generate a sourcemap (.map) files

8.	
--module noImplicitAny

Disallows the compiler from inferring the any type

9.


    </pre>
