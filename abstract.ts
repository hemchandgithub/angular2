abstract class Department
{
constructor(public name: string)
{

}
printname(): void{
    console.log("Department name: " + this.name);
}
abstract printmeeting(): void;
}

class AccountDepartment extends Department
{
    constructor()
    {
        super("Account and Audit");
    };
    printmeeting(){
        console.log("The Accounting Department meets each Monday at 10am.");
    }
    generatereports(){
        console.log("Generating accounting reports...");
    }
}

class SalesDepartment extends Department
{
    constructor()
    {
        super("Sales dept");
    }
    printmeeting()
    {
        console.log("Sales Print meeting")
    }
}

class Hrdepartment extends Department{
    constructor(){
        super("HR Dept");

    }
    printmeeting(){
        console.log("HR dept print meeting")
    }
     generatereports(){
        console.log("Generating hr reports...");
    }
}

let department : Department;
department = new AccountDepartment();

department.printname();
department.printmeeting();

let dept : Department;
dept = new SalesDepartment();
dept.printname();
dept.printmeeting();

let depthr : Department;
depthr = new Hrdepartment();
depthr.printname();
depthr.printmeeting();


let dobj = new Hrdepartment();
dobj.printname();
dobj.printmeeting();
dobj.generatereports();
