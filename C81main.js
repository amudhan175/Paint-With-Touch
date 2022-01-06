canvas=document.getElementById("myCanvas");
color = "red";
ctx=canvas.getContext("2d");
var mouseevent="empty";
width="1";
lastx="";
lasty="";

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseevent="mousedown";
    }
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseevent="mouseup";
    }
    canvas.addEventListener("mouseleave",my_mouseleave);
    function my_mouseleave(e){
        mouseevent="mouseleave";
        }
        canvas.addEventListener("mousemove",mousemove);
        function mousemove(e){
            color=document.getElementById("color").value;
            width=document.getElementById("Width").value;
            x=e.clientX-canvas.offsetLeft;
            y=e.clientY-canvas.offsetTop;
            if(mouseevent=="mousedown"){
                ctx.beginPath();
                ctx.strokeStyle = color;
                ctx.lineWidth = width;
                console.log("position of last x="+lastx+",position of last y="+lasty);
                ctx.moveTo(lastx,lasty);
                console.log("current position of x="+x+",current position of y="+y);
                ctx.lineTo(x,y);
                ctx.stroke();
                lastx = x;
                lasty = y;
            }
            }
            canvas.addEventListener("touchstart", my_touchstart);
            function my_touchstart(e){
                console.log("my_touchstart");
                lastx=e.touches[0].clientX - canvas.offsetLeft;
                lasty=e.touches[0].clientY - canvas.offsetRight;
            }
                canvas.addEventListener("touchmove", my_touchmove);
                    function my_touchmove(e)
                {
                console.log("my_touchmove");
                     current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
                     current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
            
                    ctx.beginPath();
                    ctx.strokeStyle = color;
                    ctx.lineWidth = width;
            
                    console.log("Last position of x and y coordinates = ");
                    console.log("x = " + lastx + "y = " + lasty);
                    ctx.moveTo(lastx, lasty);
            
                    console.log("Current position of x and y coordinates = ");
                    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
                    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
                    ctx.stroke();
            
                    lastx = current_position_of_touch_x; 
                    lasty = current_position_of_touch_y;
                }
function clear(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}