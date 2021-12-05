function clkbn(val){
    console.log(val)
    document.getElementById("screen").value+=val
    
}
function clr(){
    document.getElementById("screen").value=""
}
function off(){
    document.getElementById("screen").value="GOODBYE"
}
function eqal(){
    
   var text=document.getElementById("screen").value
    var result=eval(text)
    
    document.getElementById('screen').value=result
}