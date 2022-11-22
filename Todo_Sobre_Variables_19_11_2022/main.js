addEventListener("DOMContentLoaded", (e) => {

    document.querySelector("body").innerHTML = "<h1>Presione F12 para ver informacion en consola</h1> ";

    let string = "Soy un string";
    let number = 23
    let boleano= true;
    const constante = 3.14159;
    console.log({string,number,boleano,constante});

})