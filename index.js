let slid=document.getElementById("slider");
let cont=document.getElementById("val");
cont.innerHTML=slid.value;
let lenOfPassword=1;
slid.onclick=function(){
     lenOfPassword=cont.innerHTML=this.value;
}
lenOfPassword=this.value;
let st1="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstwxyz0123456789!@#$%^&*_|?*+-";
let captial="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let small="abcdefghijklmnopqrstwxyz";
let Integer="0123456789";
let symbol="!@#$%^&*_|?<*+->";
var uc=document.getElementById("ucase");
var lc=document.getElementById("lcase");
var nu=document.getElementById("num");
var sy=document.getElementById("symbol");
let cont1=document.getElementById('pass');
function gen(){
     let pass="";
     while(pass.length<lenOfPassword){
          let ran=Math.floor(Math.random()*74);
          let ch=st1.charAt(ran);
          console.log(ch);
          if(captial.includes(ch) && uc.checked){
               pass=pass+ch;
          }
          else if(small.includes(ch) && lc.checked){
               pass=pass+ch;
          }
          else if(Integer.includes(ch) && nu.checked){
               pass=pass+ch;
          }
          else if(symbol.includes(ch) && sy.checked){
               pass=pass+ch;
          }
     }
     cont1.value=pass;
     let strong=document.getElementById("st");
     if(pass.length<=7){
          strong.style.background="red";
          strong.style.boxShadow="0px 0px 10px 1px rgb(234, 22, 22)";
     }
     if(pass.length>7 && pass.length<=12){
          strong.style.background="yellow";
          strong.style.boxShadow="0px 0px 10px 1px rgb(243, 227, 3)";
     }
     else if(pass.length>12){
          strong.style.background="green";
          strong.style.boxShadow="0px 0px 10px 1px rgb(25, 240, 9)";
     }

}
function copyPass(){
     let copyText=document.getElementById("pass");
     navigator.clipboard.writeText(copyText.value);
     document.getElementById("disp").style.visibility="visible";
     setTimeout(()=>document.getElementById("disp").style.visibility="hidden",2000);

}



