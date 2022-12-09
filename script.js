let from=document.getElementById("from");
let to=document.getElementById("to");
let value=document.getElementById("value");
let result=document.getElementById("result");

document.getElementById("swap").addEventListener("click",function(){
    let temp=from.value;
    from.value=to.value;
    to.value=temp;

    temp=value.value;
    value.value=result.value;
    result.value=temp;

    
});
document.getElementById("from").addEventListener("change",function(){
    result.value="";
    if(!value.value==""){
        let res=AnyToAny();
        if(result!=NaN){
            result.value=res;
        }
    }
});
document.getElementById("to").addEventListener("change",function(){
    result.value="";
    if(!value.value==""){
        let res=AnyToAny();
        if(result!=NaN){
            result.value=res;
        }
    }
});
document.getElementById("convert").addEventListener("click",function(){
    result.value="";
    if(isValid()){
        AnyToAny();
    }else{
        alert("Enter valid Input Value:");
    }
});

function isValid(){
    if(value.value=="") return false;
    else if(from.value=="binary"){
        return !isNaN(parseInt(value.value,2));
    }
    return true;
}


function AnyToAny(){
    let base=10;
    let t=from.value;
    if(t=="binary") base=2;
    else if(t=="octal") base=8;
    else if(t=="hexadecimal") base=16;
    else base=10;

    let radix=10;
    t=to.value;
    if(t=="binary"){
        radix=2;
    }else if(t=="octal"){
        radix=8;
    }else if(t=="hexadecimal"){
        radix=16;
    }
    let decimal = parseInt(value.value, base).toString(radix);
    result.value = decimal;
    return result.value;
}

