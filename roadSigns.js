// Function called in roadSigns.html to start canvas
// First sign is DO NOT ENTER, second is stop light sign
function draw() {
    var signs = document.querySelector("#signs");
    var ctx = signs.getContext('2d'); // pull the content out in 2D

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
    
    ctx.save(); // save coordinate system
    // Draw second sign next to the first
    ctx.translate(450, -375);
    ctx.rotate(0.8); // rotate coordinate system
    ctx.beginPath();
    
    // Set drawing properties
    ctx.lineWidth = "5"; // 10px width outline
    ctx.strokeStyle = "black"; // black outline
    ctx.lineJoin = "round"; // round corners
    ctx.fillStyle = "gold"; // gold fill
    
    ctx.rect(300, 300, 150, 150); // draw rectangle
    ctx.closePath();
    
    // Fill and outline sign
    ctx.fill();
    ctx.stroke();
    
    ctx.restore(); // old coordinate system
    ctx.rotate(1.55); // rotate coordinate system so inner rectangle is vertical
    
    // Draw black rectangle inside sign
    ctx.fillStyle = 'black'; // set fill color
    ctx.fillRect(96, -461, 133, 45); // fill rectangle at starting x-axis, starting y-axis, width, and height

    // Draw red circle inside black rectangle
    ctx.fillStyle = 'red'; // fill it red
    ctx.beginPath();
    ctx.arc(122, -439, 17, 0, 2 * Math.PI); // set middle of circle, radius, start and end angle
    ctx.closePath();
    ctx.fill();
    
    // Draw yellow circle inside black rectangle
    ctx.fillStyle = 'yellow'; // fill it yellow
    ctx.beginPath();
    ctx.arc(162, -439, 17, 0, 2 * Math.PI); // set middle of circle, radius, start and end angle
    ctx.closePath();
    ctx.fill();

    
    // Draw green circle inside black rectangle
    ctx.fillStyle = 'lime'; // fill it green
    ctx.beginPath();
    ctx.arc(203, -439, 17, 0, 2 * Math.PI); // set middle of circle, radius, start and end angle
    ctx.closePath();
    ctx.fill();
}