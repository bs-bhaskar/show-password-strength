var pass=document.getElementById("password");
var msg=document.getElementById("message");
var str=document.getElementById("strength");

pass.addEventListener('input',()=>{
    if(pass.Value.length>0){
        msg.style.display="block";
    }
    else{
        msg.style.display="none";
    }
    if(pass.Value.length<4){
        str.innerHTML="weak"
        pass.style.borderColor="#ff5925"
        msg.style.color="#ff5925"
    }
    else if(pass.Value.length>=4 && pass.Value.length<8){
        str.innerHTML="medium"
        pass.style.borderColor="yellow"
        msg.style.color="yellow"
    }
    else if(pass.Value.length>=8){
        str.innerHTML="strong"
        pass.style.borderColor="green"
        msg.style.color="green"
    }
})