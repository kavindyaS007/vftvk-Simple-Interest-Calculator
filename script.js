function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("myRange").value;
    y = document.getElementById("years").value;
    //alert(p+","+r+","+y);
    if (p<=0){
        alert("Please give a positive amount");
        document.getElementById("principal").focus();
        return false;
    }
    else{
        sum = p*y*(r/100);
        //p.stye.color="red";
        //sum.innerHTML.backgroundColor("red");
        //newsum = sum.fontcolor("red");
        //sum = sum.toFixed(2);
        sum = Math.round(sum);
        current = new Date().getFullYear()
        year = y*1 + current;
        nl = "<br>";
        result = 'If you deposit '+p+','+nl+'at an interest rate of '+r+'%.'+nl+'You will receive an amount of '+sum+','+nl+'in the year '+year;
        //console.log(sum);
        //alert(sum);
        //document.write(sum);
        document.getElementById("res").innerHTML=result;
        return false;
    }
    return false;
}