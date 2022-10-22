function updateButtons(idElement){
    console.log('hola')
    input=idElement;
    let arrayClass= ['bold', 'oblique','underlined'];
    arrayClass.forEach(element => {
        validateButtonClass(element);
    });


  }

function validateButtonClass(classButtonValue){

    let element = document.getElementById(input);
    if(element.classList.value.includes(classButtonValue))
        document.getElementById(classButtonValue).style.color ="red";
    else
        document.getElementById(classButtonValue).style.color ="black";

  }

function addClass(classAddValue){

    let element = document.getElementById(input);
    if(element.classList.value.includes(classAddValue))
        element.classList.remove(classAddValue);
    else
        element.classList.add(classAddValue);
    updateButtons(input);
    
  }
  
