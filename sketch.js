function setup(){
    noCanvas();
    loadJSON(wordnikAPI,function(data){
        createP(data.word);
        loadJSON(giphyAPI+data.word, gotDataDAta);
    });
}

function gotDataDAta(data){
    console.log
}