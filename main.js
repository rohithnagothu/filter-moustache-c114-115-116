noseX=0;
noseY=0;

function preload(){
    clownnose=loadImage("moustache.png")
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
  image(video,0,0,300,300);
//   fill(255,0,0);
//   stroke(255,0,0);
//   circle(noseX,noseY,20);
  image(clownnose,noseX-20,noseY+10,40,20);

}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results){
    if(results.length>0){
    console.log(results);
    console.log("nose x="+results[0].pose.nose.x);
    console.log("nose y="+results[0].pose.nose.y);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    }
}
