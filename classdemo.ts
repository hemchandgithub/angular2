class animal
{
    aname: string;
    constructor(namea:string)
    {
        this.aname = namea;
        console.log("The name of the animal is" + this.aname)
    }
    move(distance:number = 0){
    
    console.log("The distance covered from animal is" + distance)
    }
}
class tiger extends animal
{
    constructor(name:string){
        super(name);
    }
    move(distance:number = 5){
        super.move(); 
        console.log("The distance covered is" + distance)
       
    }
}
class horse extends animal{
   
    constructor(name:string){
         console.log("The name of the animal from horse ")
        super(name)
       
    }
    move(distance = 10){
      
        //super.move(distance);  
        console.log("The distance covered is" + distance)
    }

}
/*let tig = new tiger("the Bengal Tiger");
tig.move();*/

let hem  = new horse("mighty black horse");
hem.move();


