// P * (1+(r/t))^(nt) = A
// Monthly Investment * (1 + (Given Risk/12 OR 1 [1 year or 12 months?])) = Target Net Worth
// P++ if it doesn't == A.

var p,r,t,a;


r = document.getElementsByName("risk");
t = Number(document.getElementById("Rage").value); //time in years
a = document.getElementById("TargetNetWorth").value; // Target

var p,r,t,a,n;

p = 1;
// DEMO
r = 0.04;
t = 50;
a = 100000;
n = 1;
//END DEMO, DELETE DEMO
    
var placeholder;
var x = Math.pow((1+(r/t)),(n*t));

while((p*x)!=a){
    if((p*x) < a){
        p++;
    }
    else if((p*x) > a){
        placeholder = p;
        break();
    }
}
    
console.log(placeholder);

