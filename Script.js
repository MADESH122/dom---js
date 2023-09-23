var pardiv = document.createElement("div");
pardiv.style.textAlign = "center"
pardiv.style.paddingTop = "30px"

//this is the input for the date
var inputdate = document.createElement("input");
inputdate.setAttribute("type","date");
inputdate.setAttribute("id","dob");
inputdate.style.width = "30%"
inputdate.style.margin = "10px"
inputdate.style.padding = "3px"

//this is for the button 
var button = document.createElement("button");
button.innerHTML = "Display date"
button.className = "btn btn-primary"
button.style.marginBottom="5px"
button.addEventListener("click",displaydata);

var para=document.createElement("p")
document.body.append(para)

var para1=document.createElement("p")
document.body.append(para1)

var para2=document.createElement("p")
document.body.append(para2)

var para3=document.createElement("p")
document.body.append(para3) 

var para4=document.createElement("p")
document.body.append(para4)

var para5=document.createElement("p")
document.body.append(para5)

var para6=document.createElement("p")
document.body.append(para6)

var para7=document.createElement("p")
document.body.append(para7)

var para8=document.createElement("p")
document.body.append(para8)

//Append it to parent div
pardiv.append(inputdate,button,para8,para7,para6,para5,para4,para3,para2,para1,para)
var displaydiv = document.createElement("div");
displaydiv.id = "displaydata"
document.body.append(pardiv)



function displaydata(){
    var input =document.getElementById("dob").value;

    var inpdate=new Date(input)
    console.log(inpdate);
    document.getElementsByTagName("p")
    para.innerHTML=inpdate;

    var currdate=new Date()
    console.log(currdate);
    para1.innerHTML=currdate;

     
    var millisecont=currdate.getTime()-inpdate.getDate()
    console.log(millisecont)
    para2.innerHTML="millisecont = " + millisecont;


    var seconds= Mathfloor(millisecont,1000)
    console.log(seconds)
    para3.innerHTML="seconds = " + seconds;

    
    var minutes=Mathfloor(seconds,60)
    console.log(minutes)
    para4.innerHTML="Minutes = "+ minutes;

    var hours=Mathfloor(minutes,60)
    console.log(hours)
    para5.innerHTML="hours = "+ hours;


    var days=Mathfloor(hours,24)
    console.log(days)
    para6.innerHTML="days = " + days;

    var monthdiff=getmonthdiff(inpdate,currdate)
    console.log(monthdiff)
    para7.innerHTML="Month = " + monthdiff;


    var years= getYear(inpdate,currdate)
    console.log(years)
    para8.innerHTML="Year = "  + years;

}


function Mathfloor(value1,value2){
    return Math.floor(value1/value2)
}

function getYear(value1,value2){
    var d1=new Date(value1)
    var d2=new Date(value2)
    return d2.getFullYear()-d1.getFullYear()
}

function  getmonthdiff(value1,value2){
    var year =getYear(value1,value2)
    var month = (year*12)+(value2.getMonth()-value1.getMonth())
    return month


}
















