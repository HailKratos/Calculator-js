const display= document.getElementById("display");

function appendtodisplay(input){
    display.value += input;
}

function calculate(){
    try{
        display.value= eval(display.value);
    }
    catch{
        display.value= "ERROR";
    }
}

function cleardisplay(){
    display.value="";
}

function deleteelement(){
    display.value= display.value.slice(0,-1);
}


