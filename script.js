function check()
{               
                if(principal.value == 0){
                alert("Please enter a positive number");
                principal.focus();
                return false;
                }
                //Check if email field is empty
                if(principal.value <= 0){
                alert("Please enter a positive number");
                principal.focus();
                return false;
                }   
                compute()
                return true;
            }              
               
 function compute()   {           
                var principal = document.getElementById("principal").value;            
                var rate = document.getElementById("rate").value;
                var years = document.getElementById("years").value;
                var year = new Date().getFullYear()+parseInt(years);
                var interest = principal * years * rate / 100;
                document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark><br>at an interest rate of <mark>"+rate+"%</mark>,<br>you will receive an amount of <mark>"+interest+"</mark><br>in the year <mark>"+year+"</mark>.<br>";               
 }
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
