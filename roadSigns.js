// Function called in roadSigns.html to start canvas
// First sign is DO NOT ENTER, second is stop light sign
function draw() {
    var signs = document.querySelector("#signs");
    var ctx = signs.getContext('2d'); // pull the content out in 2D

     //------------------SIGN #1: Do Not Enter Sign------------------------//
    
    ctx.save(); // save previous display

    // Set drawing properties
    ctx.fillStyle = 'red'; // fill it red
    ctx.strokeStyle = 'red'; // outline it red

    // Create circle path
    ctx.beginPath();
    ctx.arc(150, 150, 75, 0, 2 * Math.PI); // set middle of circle, radius, start and end angle
    ctx.closePath();

    // fill and outline sign with red
    ctx.fill();
    ctx.stroke();
    
    // draw rectangle
    ctx.fillStyle = 'white'; // set fill color
    ctx.fillRect(90, 145, 120, 18); // fill rectangle at starting x-axis, starting y-axis, width, and height

    // Draw DO NOT text
    ctx.font = "bolder 24px Verdana"; // set font family
    ctx.fillText("DO NOT", 97, 130); // set font content, x-axis position, y-axis position
    
    // Draw ENTER text
    ctx.fillText("ENTER", 105, 195); // set font content, x-axis position, y-axis position
    ctx.restore(); // restore previous display state
    
    //------------------SIGN #2: Stop Light Sign------------------------//
    
    ctx.save(); // save coordinate system
    ctx.translate(450, -375); // draw second sign to the right of the first
    ctx.rotate(0.8); // rotate coordinate system
    
    // Set drawing properties
    ctx.lineWidth = "5"; // 10px width outline
    ctx.strokeStyle = "black"; // black outline
    ctx.fillStyle = "gold"; // gold fill
    
    // quadraticCurveTo() rounds rectangle corners (more rounded than lineJoin does)
    var radius = 15; // corner curve radius
    var height = 150;
    var width = 150;
    var x = 300; // start x-coordinate
    var y = 305; // start y-coordinate
    
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius); 
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height); 
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius); 
    ctx.quadraticCurveTo(x, y, x + radius, y); 
    ctx.closePath();
    
    // Fill and outline sign
    ctx.fill();
    ctx.stroke();
    
    ctx.restore(); // old coordinate system
    ctx.rotate(1.55); // rotate coordinate system so inner rectangle is vertical
    
    // Draw black rectangle inside sign
    ctx.fillStyle = 'black'; // set fill color
    ctx.fillRect(99, -458, 133, 45); // fill rectangle at starting x-axis, starting y-axis, width, and height

    // Draw red circle inside black rectangle
    ctx.fillStyle = 'red'; // fill it red
    ctx.beginPath();
    ctx.arc(125, -436, 17, 0, 2 * Math.PI); // set middle of circle, radius, start and end angle
    ctx.closePath();
    ctx.fill();
    
    // Draw yellow circle inside black rectangle
    ctx.fillStyle = 'yellow'; // fill it yellow
    ctx.beginPath();
    ctx.arc(166, -436, 17, 0, 2 * Math.PI); // set middle of circle, radius, start and end angle
    ctx.closePath();
    ctx.fill();

    
    // Draw green circle inside black rectangle
    ctx.fillStyle = 'lime'; // fill it green
    ctx.beginPath();
    ctx.arc(207, -436, 17, 0, 2 * Math.PI); // set middle of circle, radius, start and end angle
    ctx.closePath();
    ctx.fill();
}