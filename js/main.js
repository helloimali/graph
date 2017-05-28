        
    $(document).ready(
        function() {
    
    $(".page4").fadeToggle(0.000001);
    $(".dreamfade").fadeToggle(1500);
    $(".dreamfade").delay(1000).fadeToggle(1000);
    //Takes care of the intro fade
        
    $(".page2").delay(4000).fadeToggle(1000);
    // now boxes are visable
        
	});

    var age = 2;
    var MI = 0;
    var Target = 10; 
    var risky = 0 ;
    var goal = 1;

    var  X = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29"];
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
            data: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290]
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
    
function back(){
    $(".page4").fadeToggle(1000);
    $(".page2").delay(2000).fadeToggle(1200);
}
    
function load(){
    ranNum = Math.floor(Math.random() * 2) + 1;
     $(".page2").fadeToggle(2000);
    if(ranNum == 1){
        $(".one").delay(2000).fadeToggle(1200);
         $(".one").delay(3000).fadeToggle(1200);
    }
    else{
        $(".two").delay(2000).fadeToggle(1200);
        $(".two").delay(3000).fadeToggle(1200);
    }

    $(".page4").delay(8000).fadeToggle(1000);
}

function calc() {
    

    
    //Update Vars
    
    age = Number(document.getElementById("age").value);
    Rage = Number(document.getElementById("Rage").value);
    MI = document.getElementById("MonthlyInvestment").value;
    Target = document.getElementById("TargetNetWorth").value;
    risky = document.getElementsByName("risk");
    goal= document.getElementsByName("goal");
    
    if(age<=0||Rage<=0||MI<=0||Target<=0||risky<=0){
        alert("Please make sure all the numbers are filled in and positive!");
        throw new Error('Rage <= age');
    }
    
    
    if(Rage <= age){
        alert("The time you wish to retire has already passed!");
        throw new Error('Rage <= age');
    }
    
    console.log("Risk: asdasdas: " + risky);

    var addition = MI;
    
    //^Update Vars^
    
    load();
    
    for (var i = 0, length = 4; i < length; i++) {		
        if (risky[i].checked) {		
        risky = risky[i].value;		
        break;		
        // risk calc.		
        }		
    }
 
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
       
    //background change

    for (var i = 0, length = 4; i < length; i++) {		
        if (goal[i].checked) {		
        goal = goal[i].value;		
        break;		
        // risk calc.		
        }		
    }
    
    if(goal== 1){
        document.getElementById("graphBack").style.background = "url('img/goal1O.png') center";
        
    }
    if(goal== 2){
        document.getElementById("graphBack").style.background = "url('img/goal2O.png') center";
                }
    if(goal== 3){
        document.getElementById("graphBack").style.background = "url('img/goal3O.png') center";
    }
    
        
    
    //^^background change

    
}