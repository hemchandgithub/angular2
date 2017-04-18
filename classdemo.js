var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var animal = (function () {
    function animal(namea) {
        this.aname = namea;
        console.log("The name of the animal is" + this.aname);
    }
    animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("The distance covered from animal is" + distance);
    };
    return animal;
}());
var tiger = (function (_super) {
    __extends(tiger, _super);
    function tiger(name) {
        return _super.call(this, name) || this;
    }
    tiger.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        _super.prototype.move.call(this);
        console.log("The distance covered is" + distance);
    };
    return tiger;
}(animal));
var horse = (function (_super) {
    __extends(horse, _super);
    function horse(name) {
        var _this = this;
        console.log("The name of the animal from horse ");
        _this = _super.call(this, name) || this;
        return _this;
    }
    horse.prototype.move = function (distance) {
        if (distance === void 0) { distance = 10; }
        //super.move(distance);  
        console.log("The distance covered is" + distance);
    };
    return horse;
}(animal));
/*let tig = new tiger("the Bengal Tiger");
tig.move();*/
var hem = new horse("mighty black horse");
hem.move();
