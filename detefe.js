Webcam.set({
width:400,height:350,image_format:"jpg",jpg_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function queso () {
Webcam.snap(function(data_uri) { document.getElementById("wizz").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>'; });
}
console.log("ml5 version 2.0",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/XwDNsR9Ot/model.json", bronco)

function bronco () {
console.log("el modelocargo");
}

function manchego () {
image=document.getElementById("selfie_image");
classifier.classify(image,oaxaca)
}

function oaxaca(error,results) {
if (error) {
console.log("error");
} else {
console.log("results");
document.getElementById("volu").innerHTML=results[0].label;
document.getElementById("tobi").innerHTML=results[0].confidence;4
}
}