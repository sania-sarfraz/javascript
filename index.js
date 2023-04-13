//1-->login to print fabonacci series
// declaration of the variables  


var num1=0,num2=1,next_num,i;

var num=prompt ( "Enter limit of your number");
document.write("Fabonacci series:");//print fabonacii series

for(i=1;i<=num;i++){
    document.write("<br>"+num1);//print number 1
    next_num=num1+num2;//next num is asum of num 1 and num 2
    num1=num2;//assign num2 into num2
    num2=next_num;//assign next_num into num2
}


//2-->logic to print factorial of a number
//get input from user

var number = prompt("Enter a positive integer:");
if (number < 0) {
    document.write('Error! There is no factorial of negative value.');
}

else if (number == 0) {
    document.write('The factorial of ${number} is 1 ');
}

else{
    let fact = 1;
    for(i = 1;i <= number; i++){
        fact *= i;
    }
        document.write(`The factorial of ${number} is ${fact}.`);
}

//3-->Remove occurance of given character

let String = 'javascript is interpreter language'
String = String.replaceAll('r', '')
document.write( String )
 

//4--> program to reverse a string

function reversestring(str){
    var newstring="";

    for(var i <= string.length-1;i>=0;i--){
        newstring +=str[i];
    }
    return newstring;
}
const string=prompt("Enter a String");

const result=reversestring(string);
document.write(result);


//5-->Apply getter and setter

//getter

const student={
    firstname:'Sania',
    department:'SE',

    get getname(){
        return this.firstname;
        return this.department;
    }
};

document.write(student.firstname,"<br>");
document.write(student.department);
// document.write(student.getname);

//setter
const Name={
    firstname:'Amna',

    set ChangeName(newName){
        this.firstname=newName;
    }
};

document.write(Name.firstname,"<br>");
Name.ChangeName='Sania';

document.write(Name.firstname);


//6-->First repeaing character in a string

let str = prompt("Enter a String");
function firstRepeating(str)
{
     
    // Creates an empty hashset
    let h = new Set();
     
    // Traverse the input array from left to right
    for(let i = 0; i <= str.length - 1; i++)
    {
        let c = str[i];
 
        if (h.has(c))
            return c;
             
        // Else add element to hash set
        else
            h.add(c);
    }
    return '\0';
}
 
// Driver code
document.write(firstRepeating(str));
 

//7--->check number is integer or not

const num=prompt("Enter the number");
function isint(num){
    return num%1 === 0;
}
document.write(isint(num));


//8---> function that would you allow to call a function
function firstFunc(){
    return "This is first function with 0 parameter";
}

function secondFunc(last){
    return "Hello" + last;
}

function addnumber(x,y){
    return x+y;
}
document.write(firstFunc());
document.write(secondFunc(Sania));
document.write(addnumber(12,13));



