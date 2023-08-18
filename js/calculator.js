
function keyPress(key) {
    let inputScreen = document.getElementById("input");
    inputScreen.value += key;
}

function calculate()
{
    let inputScreen = document.getElementById("input");
    inputScreen.value = eval(inputScreen.value);
}

function clear(key)
{
    let inputScreen = document.getElementById("input");
    if(key == AC)
    {
        inputScreen.value = ' ';
    }
    else
    {
        inputScreen.value += key;
    } 
    
}
