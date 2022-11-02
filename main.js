function stcl() 
{
    navigator.mediaDevices.getUserMedia({audio : true}) ;
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/_Vh-a4LRx/model.json", modelReady) ;
}

function modelReady() 
{
    classifier.classify(gotResults) ;
    console.log("working")
}