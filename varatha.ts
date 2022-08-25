interface department {
    modelName: string;
    modelNumber: string;
    price: number;
    count: string;
    value(): string;
}


class Shoe implements department {
    modelNumber: string;
    modelName: string;
    price: number;
    count: string;
    constructor(modelNumber: string, modelName: string,  price:number, count: string) {
        this.modelNumber = modelNumber; 
        this.modelName = modelName;
        this.price = price;
        this.count = count;
    }
    brand: string = 'Shoe';
    value(): string {
        return "Shoe count: " + this.count;
    }
}
class Slipper implements department{
    modelNumber: string;
    modelName: string;
    price: number;
    count: string;
    constructor(modelNumber: string, modelName: string,price:number, count: string) {
        this.modelNumber = modelNumber; 
        this.modelName = modelName;
        this.price = price;
        this.count = count;
    }

    brand: string = 'Slipper';
    value(): string {
        return "slipper count" + this.count;
    }
    
}


var a = new Shoe('1', 'puma',200,'20');
var b = new Shoe('2', 'Reebok',210,'20');
var c = new Slipper('1','VKC',230,'20');
var d = new Slipper('2','Bata',300,'20');
delete d['modelNumber'];
delete d['modelName'];
console.log("-----------------------");

function value(a,b){
    const arr = [],
    obj = Object.keys(a);
    for (var quantity in obj){
      if(a[obj[quantity]] > 5){
        arr.push(obj[quantity]);
      }
    }
    return arr;
  }
   var x = [{brand:"shoe",modelNumber: 8,modelName:"Sketches",price:500, count: "25"},
   {brand:"shoe",modelNumber:9 ,modelName:"Adidas",price:550, count: "28"}]
   ;
  
   const res = x.filter((obj) => {
    return obj.count > '5';
  
  });
console.log(res);
console.log("Store Details");
console.log(a,b,c,d);
console.log("--------------------------------");
console.log("1.Add");
console.log(x);
console.log("-----------------------");
console.log("2.Deduct");
console.log(d);
console.log("-----------------------");
console.log("4.Threshold");
console.log(value(a ,b))
console.log(res);
console.log("-----------------------");
console.log(a);



