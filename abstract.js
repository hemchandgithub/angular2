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
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printname = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountDepartment = (function (_super) {
    __extends(AccountDepartment, _super);
    function AccountDepartment() {
        return _super.call(this, "Account and Audit") || this;
    }
    ;
    AccountDepartment.prototype.printmeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    AccountDepartment.prototype.generatereports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountDepartment;
}(Department));
var SalesDepartment = (function (_super) {
    __extends(SalesDepartment, _super);
    function SalesDepartment() {
        return _super.call(this, "Sales dept") || this;
    }
    SalesDepartment.prototype.printmeeting = function () {
        console.log("Sales Print meeting");
    };
    return SalesDepartment;
}(Department));
var Hrdepartment = (function (_super) {
    __extends(Hrdepartment, _super);
    function Hrdepartment() {
        return _super.call(this, "HR Dept") || this;
    }
    Hrdepartment.prototype.printmeeting = function () {
        console.log("HR dept print meeting");
    };
    Hrdepartment.prototype.generatereports = function () {
        console.log("Generating hr reports...");
    };
    return Hrdepartment;
}(Department));
var department;
department = new AccountDepartment();
department.printname();
department.printmeeting();
var dept;
dept = new SalesDepartment();
dept.printname();
dept.printmeeting();
var depthr;
depthr = new Hrdepartment();
depthr.printname();
depthr.printmeeting();
var dobj = new Hrdepartment();
dobj.printname();
dobj.printmeeting();
dobj.generatereports();
