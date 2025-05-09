let img;

//We will divide the image into segments
let numSegments = 50;

//We will store the segments in an array
let segments = [];

//let's add a variable to switch between drawing the image and the segments
let drawSegments = false;

//Let's make an object to hold the draw properties of the image
let imgDrwPrps = {aspect: 0, width: 0, height: 0, xOffset: 0, yOffset: 0};

//And a variable for the canvas aspect ratio
let canvasAspectRatio = 0;

function preload(){
    img = loadImage(P5-project/Mona_Lisa_by_Leonardo_da_Vinci_500_x_700.jpg);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    imgDrwPrps.aspect = img.width / img.height;
    canvasAspectRatio = width / height;
    calculateImageDrawProps();
}

function draw(){
    background(220);
    image(img, imgDrwPrps.xOffset, imgDrwPrps.yOffset, imgDrwPrps.width, imgDrwPrps.height);
}

function calculateImageDrawProps() {
    if (imgDrwPrps.aspect > canvasAspectRatio){
        imgDrwPrps.width = width;
        imgDrwPrps.height = width / imgDrwPrps.aspect;
        imgDrwPrps.yOffset = (height - imgDrwPrps.height) / 2;
        imgDrwPrps.xOffset = 0;
    }else {
        imgDrwPrps.height = height;
        imgDrwPrps.width = height * imgDrwPrps.aspect;
        imgDrwPrps.xOffset = (width - imgDrwPrps.width) / 2;
        imgDrwPrps.yOffset = 0;
    } else if (imgDrwPrps.aspect == canvasAspectRatio) {
        imgDrwPrps.width = width;
        imgDrwPrps.height = height;
        imgDrwPrps.xOffset = 0;
        imgDrwPrps.yOffset = 0;
    }
}