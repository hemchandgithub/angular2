var Greeter = (function () {
    function Greeter(msg) {
        alert("alert called from constructor");
        this.greeting = msg;
    }
    Greeter.prototype.greet = function () {
        alert("alert called from method");
        return this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("Hemchand");
alert("alert called");
document.getElementById('did').innerHTML = greeter.greet();
