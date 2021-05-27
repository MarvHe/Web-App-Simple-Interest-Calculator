function updateRate()
{   // Update the interest rate as the slider is changing
    var rateval = document.getElementById("rate").value;
    // Show new value right next to slider
    document.getElementById("rate_val").innerText=rateval;
}
function check()
{   // Added conditions to check for zero or negative values before computing.
    // If values are invalid, an alert is shown and by clicking "OK" focusses back on principal
    if(principal.value == 0){
    alert("Enter a positive number");
    principal.focus();
    return false;
    }
    if(principal.value <= 0){
    alert("Enter a positive number");
    principal.focus();
    return false;
    } 
    // If values are valid (else), start function compute()  
    compute()
    return true;
}               
 function compute()   
{   // Main computation of interest with inputs stored and processed
    // Output the result as text by innerHTML        
    var principal = document.getElementById("principal").value;            
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);
    var interest = principal * years * rate / 100;
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,<br>at an interest rate of <mark>"+rate+"%</mark>.<br>You will receive an amount of <mark>"+interest+"</mark>,<br>in the year <mark>"+year+"</mark>.<br><br>";               
}
function valreset()
{   // Reset function that clears principal and result message, sets interest slider and rate and year to default
    document.getElementById("principal").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("rate_val").innerText = "10.25";
    document.getElementById("years").value = "1";
    document.getElementById("result").innerHTML="";
}