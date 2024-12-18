//Data Strctures in Java Script:- var, let, const, null, undefined
console.log(2=="2")
console.log(2==="2")
console.log(null==undefined)
console.log(null===undefined)

console.log(4+(+"2"))//sum will be 6-->Implicit casting
console.log(4+"2")
console.log("2"+ +"3")
console.log(+"2"+ +"3")//Implicit coercion supported in java script
console.log(2+3+"xyz")
console.log(-"2"+ -"3")
console.log(-2+ -3)
console.log("8"+ -"3")//wierd output

console.log(1+true)
console.log(true-true)
console.log(true-true)
console.log(true-false)
console.log(+"abc")//NaN

l=+"abc"
m=+"abc"
console.log(l===m)//Not a number, because it might be anything apart from the number

var a=[1,2,3,4,5]
var b=a
a=[]
console.log(a)
console.log(b)


var a=[1,2,3,4,5]
var b=a
a.length=0
a=[]
console.log(a)
console.log(b)

console.log('***************************')
var a=[1,2,3,4,5]
var b=a
a.length=10
a=[]
console.log(a)
console.log(b)

console.log('***************************')
var a={}
var b=new Object();
console.log("syntax for object creation")

console.log('***************************')
var dog={
    name:"puspha",
    breed:"wild fire",
    bark: function(){
        console.log("Puspha is wild fire")
    }
}
dog.bark()

console.log('***************************')
function Dog(name, breed){
    this.name=name
    this.breed=breed
}

var dog1=new Dog("puspha", "wild fire")
var dog2=new Dog("shkiwat", "party ledha puspha")
console.log(dog1)
console.log(dog2)



