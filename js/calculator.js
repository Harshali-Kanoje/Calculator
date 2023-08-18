
function keyPress(key) {
    let inputScreen = document.getElementById("input");
   
    if(key == '=')
    {
        inputScreen.value = eval(inputScreen.value);  
    }
    else if(key == 'AC')
    {
        inputScreen.value = '';
        
    }
    else
    {
        inputScreen.value += key;
    }
}

