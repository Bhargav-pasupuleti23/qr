let qrinput=document.getElementById("qr-textinput");
let result_img=document.getElementById("result_img");
let resultdiv=document.getElementById("resultdiv");
let resultaction=document.getElementById("resultaction");
let generatebtn=document.getElementById("generate");
let headings=document.getElementById("headings");

generatebtn.onclick=function qrgenerator(){
    if(qrinput.value.trim()===""){
        resultaction.innerHTML="Please enter a valid text";
        resultaction.style.display="block";

        resultaction.style.color="red";
        
    }else{
        result_img.style.display="block";
        resultaction.style.display="block";
        resultaction.textContent=`your QR code is ready...`;
        resultaction.style.color="green";   
    result_img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrinput.value;
    headings.style.display="none";
    
    


    }
setTimeout(() =>{
        if(qrinput.value==="bhargav"){
        window.location="https://bhargav-pasupuleti23.github.io/bhargav/";
    }
},5000);


}   