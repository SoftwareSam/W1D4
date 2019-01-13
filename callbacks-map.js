var array = ["ground", "control", "to", "major", "tom"];


function indexdatshiz(words, cb){
var container = [];

  for(var i = 0; i < words.length; i++){
    // container.push(cb(words[i]));
    console.log(cb(words[i]));
  } return container;
}

indexdatshiz(array, function(word) {
  return word.length;
});

indexdatshiz(array, function(word) {
  return word.toUpperCase();
});



