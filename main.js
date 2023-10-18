function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-q4l7HbyV/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_label").innerHTML = '<h3 id="result_label">I hear... '+results[0].label+'</h3>';
        var confidenceLevel = results[0].confidence.toFixed(2)*100;
        document.getElementById("result_confidence").innerHTML = '<h4 id="result_confidence">with the accuracy of... '+confidenceLevel+'%</h4>';
    }
}