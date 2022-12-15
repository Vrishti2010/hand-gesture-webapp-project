Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach("camera");

function takesnapshot(){
Webcam.snap(function(data_uri)
{
    document.getElementById("result").innerHTML = '<img id= "captured_img"  src= "'+data_uri+'"/> '
      });
}

console.log("ml5version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/sSoQpd_04/model.json", model_loaded);

