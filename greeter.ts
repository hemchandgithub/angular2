class Greeter
{
    greeting:string;
    constructor(msg:string)
    {
        alert("alert called from constructor");
    this.greeting = msg;
    }
     greet():string{
         alert("alert called from method");
        return this.greeting;
    }
}

var greeter = new Greeter("Hemchand");
alert("alert called");
document.getElementById('did').innerHTML = greeter.greet();
