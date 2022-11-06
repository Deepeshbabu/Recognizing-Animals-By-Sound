function stcl() 
{
    navigator.mediaDevices.getUserMedia({audio : true}) ;
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ZRslvIUNV/model.json", modelReady) ;
}

function modelReady() 
{
    classifier.classify(gotResults) ;
    console.log("working") ;
}

function gotResults(error, results) 
{
    if (error) 
    {
        console.log(error);
    }
    else 
    {
        console.log(results);
        
        r = Math.floor(Math.random() * 255) + 1 ;
        g = Math.floor(Math.random() * 255) + 1 ;
        b = Math.floor(Math.random() * 255) + 1 ;
        r1 = Math.floor(Math.random() * 255) + 1 ;
        g1 = Math.floor(Math.random() * 255) + 1 ;
        b1 = Math.floor(Math.random() * 255) + 1 ;

        document.getElementById("result_label").innerHTML = 'Detected - ' + results[0].label ;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + "%" ;

        document.getElementById("result_label").style.color = "rgb("+r+","+g+","+b+")" ;
        document.getElementById("result_confidence").style.color = "rgb("+r1+","+g1+","+b1+")" ;

        img = document.getElementById("pic") ;

        if (results[0].label == "Barking")
        {
            img.src = "dg.gif" ;
        }
        else if (results[0].label == "Meowing")
        {
            img.src = "ct.gif" ;
        }
        else if (results[0].label == "Roaring") 
        {
            img.src = "ln.gif" ;
        } 
        else if (results[0].label == "Mooing") 
        {
            img.src = "cw.gif" ;
        }
        else 
        {
            img.src = "er.gif" ;
        }
    }
}
