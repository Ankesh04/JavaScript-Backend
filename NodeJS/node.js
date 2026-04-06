// Node js
// javascript runtime envireonment
// it is used for server side programming

// * it is not a language , library or a framework it is runtime environment

// NODE REPL
/*R- Read
  E- Evaluate
  P- Print
  L- Loop*/

// NODE Files
// first go the terminal create a file using"touch filename"
// then add you code in file
// then for output use "node filename"

// Process
// this object provides information about, and control over , the current Node.js process

//process.argv: returns an array containing the command-line arguments passed when the node.js process was launched
// here argv is an argument but it is not same as the argument in the function
// here we pass arguement with the file and that is stored inside the array that is returned by process.argv
let args = process.argv;
console.log(args);
