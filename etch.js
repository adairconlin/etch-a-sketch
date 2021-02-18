//changes all square colors to white.
function refreshFunction() {
    document.querySelectorAll(".square").forEach(item => {
        item.style.backgroundColor = "white";
    })
}

//changes color of selected square based on existing color.
function colorFunction(element) {
    if(element.style.backgroundColor == "white") {
        element.style.backgroundColor = "#95B1FF";
    } else {
        element.style.backgroundColor = "white";
    }
}

//creates a number of divs based on the users input.
function gridFunction(inp) {
    for(let i = 0; i < inp; i++) {
        let staticSize = 600;
        /*decides square width and height depending on the
        relationship between the users input and the default
        size of the container they are appending to.*/
        let x = staticSize / Math.floor(Math.sqrt(inp)) + "px";
        let y =  staticSize / Math.ceil(Math.sqrt(inp)) + "px";
        const square = document.createElement('div');
        square.style.backgroundColor = "white";
        square.style.width = x;
        square.style.height = y;
        square.className = "square";
        mainDiv.appendChild(square);

        square.addEventListener("mousedown", function() {
            colorFunction(square);
        })

        square.addEventListener("mouseover", function(e) {
            //checks if the primary mouse button is pressed.
            if(e.buttons == 1) {
                colorFunction(square);
            }
        })
    } 
}

/*checks to make sure the user input is a number, then converts
the value to an integer and runs gridFunction().*/
function inputFunction() {
    //removes any existing divs within the main container.
    let par = document.getElementById("mainDiv");
    while(par.firstChild) par.removeChild(par.firstChild);

    let inp = parseInt(document.getElementById("userinput").value);
    if(isNaN(inp)) {
        alert("please enter a number");
    } else if(inp > 600) {
        inp = 600;
        document.getElementById("userinput").value = inp;
        gridFunction(inp);
    } else {
        gridFunction(inp);
    }
}
