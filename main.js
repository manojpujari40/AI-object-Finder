objects = [];
status = "";

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = creareCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

