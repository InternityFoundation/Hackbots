// class createMail {
// 	constructor(to, from, url) {
// 		this.to = to;
// 		this.from = from;
// 		this.url = url;
// 	}
// 	getSender() {
// 		return 'Sender is ' + this.from;
// 	}
// }
// var newMail = new createMail('abc@gmail.com', 'xyz@gmail.com', 'www.google.com');
// console.log(newMail.getSender());

// //function constructor
// function ObjectMaker(name,properties){
//     this.Name=name;
//     this.features=properties;
//     this.getFeatures=function(){
//         console.log("Features of "+this.Name+" are "+this.feature);
//     };
// }
// var Bat=new ObjectMaker("Bat","Wooden");
// var Bike=new ObjectMaker("Harley","Hybrid");
// console.log(Bat);

//after ES6
class ObjectMaker{
    constructor(name,properties,fn){
        this.Name=name;
        this.feature=properties;
        this.myfn=fn;
    }
    getFeatures(){
        console.log("Features of "+this.Name+" are "+this.feature);
    }
}
var Bat=new ObjectMaker("Bat","Wooden");
console.log(Bat);