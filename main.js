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

function model_loaded(){
    console.log("model is loaded");
}

function check(){

    image= document.getElementById("captured_img");
    classifier.classify(image,gotresult);
    
}

function gotresult(error,results){

    if(error){
    console.error(error);}

    else{
    console.log(results);
    document.getElementById("result_gesture_name").innerHTML = results[0].label;
    prediction1 = results[0].label;
    comment = "";

    if(results[0].label == "Best"){
        comment = "all the best";
        document.getElementById("update_emoji").innerHTML= "&#128077;";
    }

    if(results[0].label == "Amazing"){
        comment = "this is amazing";
        document.getElementById("update_emoji").innerHTML= "&#128076;";
    }

    if(results[0].label == "Victory"){
        comment = "that was a marvelous victory";
        document.getElementById("update_emoji").innerHTML= "&#9996;";
    }

    if(results[0].label == "Dislike"){
        comment = "i don't like this";
        document.getElementById("update_emoji").innerHTML= "&#128078;";
    }

    speak();

}}

function speak(){
synth = window.speechSynthesis;
utterthis = new SpeechSynthesisUtterance(comment);
synth.speak(utterthis);  }

