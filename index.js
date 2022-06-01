// Follow along with the examples here
function doNothing() {}

function sayHello() {
  console.log("Hello!");
}
sayHello();

function sayHelloToGuadalupe() {
  console.log("Hello, Guadalupe!");
}
sayHelloToGuadalupe();
function sayHelloToLiz() {
  console.log("Hello, Liz!");
}function sayHelloToSamip() {
  console.log("Hello, Samip!");
}

sayHelloToLiz();
sayHelloToSamip();

function sayHelloTo ( firstName )
{
    console.log( `Hello, ${firstName}!` );
    console.log(firstName);
}

sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
sayHelloTo("Jane"); // "Hello, Jane!"
sayHelloTo("R2-D2"); // "Hello, R2-D2!"
sayHelloTo( 1 ); // "Hello, 1!"

function say ( greeting, firstName )
{
   
  console.log("firstName: ", firstName);
    console.log( "greeting: ", greeting );
    console.log( `${greeting}, ${firstName}!` );
}
say( "Goodbye", "Julio" );

function add(x, y) {
  return x + y;
}
console.log (add( 80, 9000 ));


function say(greeting, firstName) {
  return `${greeting}, ${firstName}!`;
}
console.log( say( "Hello", "Liz" ) );

function say ( greeting, firstName )
{
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
     
}
console.log(say("Howdy", "partner"))
