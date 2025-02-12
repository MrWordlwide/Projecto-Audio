function starClasification ()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/w_viGTypk/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}qq

function gotResults(error, results){
    if (error) {
        console.error(error);
      } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("result_label").innerHTML = 'Escucho:  '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Presición:  '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    
        img = document.getElementById('violin') 
        img1 = document.getElementById('piano')
        img2 = document.getElementById('harp')
        img3 = document.getElementById('guitarra')
        
    
        if (results[0].label == "violoncello") {
          img.src = 'violin2.jpg';
          img1.src = 'Harp.jpg';
          img2.src = 'Piano.jpg';
          img3.src = 'Guitarra.jpg';
        } else if (results[0].label == "piano") {
          img.src = 'Violin.jpg';
          img1.src = 'harp2.jpg';
          img2.src = 'Piano.jpg';
          img3.src = 'Guitarra.jpg';
        } else if (results[0].label == "arpa") {
          img.src = 'Violin.jpg';
          img1.src = 'Harp.jpg';
          img2.src = 'piano2.jpg';
          img3.src = 'Guitarra.jpg';
        }else {
          img.src = 'Violin.jpg';
          img1.src = 'Harp.jpg';
          img2.src = 'Piano.jpg';
          img3.src = 'guitar2.jpg';
      }

}
}