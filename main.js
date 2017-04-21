    var age = 2;
    var MI = 0;
    var Target = 10; 
    var risky = 0 ;
    
    var  X = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var Y = {};
    
    var ctx = document.getElementById("myChart");
    
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: X,
datasets: [
        {
            label: "Target Line",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            lineTension: 0,
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [{x: 0,y: Target},{x: 1, y: Target},{x: 2, y: Target},{x: 3, y: Target},{x: 4, y: Target},{x: 5, y: Target},{x: 6,y: Target},{x: 7, y: Target},{x: 8, y: Target},{x: 9, y: Target},{x: 10, y: Target},{x: 11, y: Target},{x: 12,y: Target},{x: 13, y: Target},{x: 14, y: Target},{x: 15, y: Target},{x: 16, y: Target},{x: 17, y: Target},{x: 18,y: Target},{x: 19, y: Target},{x: 20, y: Target},{x: 21, y: Target},{x: 22, y: Target},{x: 23, y: Target},{x: 24,y: Target},{x: 25, y: Target},{x: 26, y: Target},{x: 27, y: Target},{x: 28, y: Target},{x: 29, y: Target}]
        },
        {
            label: "Investment Line",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [0, 59, 90, 81, 56, 55, 40]
        }
    ]
        
    },
     
    options: {
        scales: {
            yAxes: [{
                stacked: false,
                ticks: {
                    beginAtZero:true
                    
                }
            }]
        }
    }
});
    
/*
There is the intro screen which Makes you chose a dream, enter your name, email, age, and Target Net Worth

Then there is  loading screen showing success stories 

Then the graph apperers with sliders showing Age, Risk, Monthly Investment, and Target Net Worth.
*/
    

    
function calc() {
    //Update Vars
    
    age = document.getElementById("age").value;
    Rage = document.getElementById("Rage").value;
    MI = document.getElementById("MonthlyInvestment").value;
    Target = document.getElementById("TargetNetWorth").value;
    risky = document.getElementsByName("risk");


    for (var i = 0, length = 4; i < length; i++) {
    if (risky[i].checked) {
        risky = risky[i].value;
        break;
        // risk calc.
        }
    }

    if(Rage <= age){
        alert("The time you wish to retire has already passed!");
        console.log(Rage);
        console.log("is is less then");
        console.log(age);
        throw new Error('Rage <= age');
    }
    
    console.log("Risk: asdasdas: " + risky);

    var addition = MI;
    
    //^Update Vars^
    
    
    //Calculations
    
        //X axis
    var maxAge = Rage;
    
    var axisX = [];

    for( i = age; i <= maxAge; i++){
        axisX.push(parseInt(i));
        
    }
    
    for(i = 0; i < 31; i++){
        console.log(axisX[i]);
    }
    
        // "axisX" now contains variables for X axis (the age)^
    
    
        // Additions
    var add = [];
    add.push(addition*12);
    console.log(add[0]);
    console.log(MI);
    console.log(addition);
    
    for(i=0; i<Rage; i++){
        add.push(add[i]*1.03);
         console.log(add[i]);
    }
    
        //Additions^
    
        //Investment (Yaxis points)
    
    var investment = [];
    investment.push(0);
    
    for(i=0; i<Rage; i++){
        console.log("Investment: " + parseInt(investment[i]));
        console.log("Invest * Risk: " + parseInt((investment[i] * risky)));
        console.log("add: " + parseInt(add[i]));
        
        investment.push(investment[i] + (investment[i] * risky) + add[i]); 
        
        console.log(investment[i+1]);

    }
    
        //Investment (Yaxis points)^
    
    // At this point, We need to use "axisX[]" for the X values (age)
    // and investment[] for the Y values
    // meaning (x,y) = (axisX[i],investment[i]);
    
    //^Calculations^
    
    
    
    //Chart Implementations
    myChart.data.labels = axisX;
    
    for(i=0; i<Rage; i++){
        myChart.data.datasets[0].data[i] = Target;
    }
    
    for(i=0; i<Rage; i++){        
        myChart.data.datasets[1].data[i] = investment[i]; 
       
        myChart.update();
        
    }

    
    //^Chart Implementations^
        

    
}
