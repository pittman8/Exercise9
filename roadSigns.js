// Calls all of the draw functions
function drawAll() {
    draw1();
    draw2();
}

function draw1() {
    
    // Find circle canvas
    var circle = document.getElementById('circle');
            
     // Check browser support
    if (circle.getContext) {
        var circleCtx = circle.getContext('2d'); // pull the content out in 2D
        
        circleCtx.beginPath(); // start circle
        
        circleCtx.arc(150, 150, 75, 0, 2 * Math.PI); // set middle of circle, radius, start and end angle
        circleCtx.fillStyle = 'red'; // fill it red
        circleCtx.fill();
        
        circleCtx.strokeStyle = 'red'; // outline it red
        circleCtx.stroke();
    }
}

function draw2() {
    
    // Find doNot canvas
    var doNot = document.getElementById('doNot');
    
    // Check browser support
    if(doNot.getContext) { 
        var doNotCtx = doNot.getContext("2d"); // pull the content out in 2D
        
        doNotCtx.beginPath();
        doNotCtx.font = "bolder 24px Verdana"; // set font family
        doNotCtx.fillStyle = 'white'; // set font color
        doNotCtx.fillText("DO NOT", 97, 130); // set font content, x-axis position, y-axis position
    }
    
    // Find enter
    var enter = document.getElementById('enter');
    
    // Check browser support
    if(enter.getContext) {
        var enterCtx = enter.getContext("2d"); // pull the content out in 2D
        
        enterCtx.beginPath();
        enterCtx.font = "bolder 24px Verdana"; // set font family
        enterCtx.fillStyle = 'white'; // set font color
        enterCtx.fillText("ENTER", 105, 195); // set font content, x-axis position, y-axis position
        
    }
    
    // Find rectangle
    var rectangle = document.getElementById('rectangle');
    
    // Check browser support
    if(rectangle.getContext) {
        var rectangleCtx = rectangle.getContext("2d"); // pull the content out in 2D
        
        rectangleCtx.fillStyle = 'white'; // set fill color
        rectangleCtx.fillRect(90, 145, 120, 18); // fill rectangle at starting x-axis, starting y-axis, width, and height
    }
}