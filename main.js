var FullPara1 = [];
var FullPara2 = [];

function DisplayFirstPara() {  
    for(var i = 1; i <= 6; i++)
    {
        if((document.getElementById("Line"+i).value)!="")
        {
            FullPara1.push(document.getElementById("Line" + i).value);
            FullPara1.join(". ");
            document.getElementById("para1").innerHTML = FullPara1.join(". ");
        }
    }
    
}

function DisplaySecondPara() {
    for(var b = 1; b <= 6; b++)
    {
        if((document.getElementById("line"+b).value)!="")
        {
            FullPara2.push(document.getElementById("line" + b).value);
            FullPara2.join(". ");
            document.getElementById("para2").innerHTML = FullPara2.join(". ");
            
        }
    }
}