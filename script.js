// hathi el function t5aline na3ref blaset el mouse fi x ou y 
// this function show you where is your mouse in x and y.
ns4 = (document.layers)? true:false
ie4 = (document.all)? true:false
function init() {
    if (ns4) {document.captureEvents(Event.MOUSEMOVE);}
    document.onmousemove=mousemove;
}
function mousemove(event) {
    var mouse_x = y = 0;
    if (document.attachEvent != null) {
        mouse_x = window.event.clientX;
        mouse_y = window.event.clientY;
    } else if (!document.attachEvent && document.addEventListener) {
        mouse_x = event.clientX;
        mouse_y = event.clientY;
    }
    status="x = " + mouse_x + ", y = " + mouse_y;
    document.getElementById('xy').innerHTML = "x = " + mouse_x + ", y = " + mouse_y;
}
init()



