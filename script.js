var txtArea = document.getElementById("txtArea");

txtArea.onkeyup = function() {
    var word = getLastWord(txtArea.value);
    if(wordMatches(word)) {
      txtArea.value =  replaceWithLastWorld(txtArea.value, word);
    }
}


function getLastWord(text) {
    var result = "";
    for (var i = text.lengvar; i>0; i--) 
        {
            if(text.substring(i,i-1) != " ") {
                result =text.substring(i,i-1)+result;
            } else {
                break
            }
        }
      return result; 
}

var keyWord = ["med","anyt"];
 function wordMatches(text) {
    text = text.toLowerCase();
    for(var i=0; i<keyWord.length; i++) {
        if(text.substring(o,keyWord[i].length) == keyWord[i]) {
            return true;
        }
    }
    return false;
 }

 function replaceWithLastWorld(text, word) {
    var result= " ";
    result = text.substring(0,text.length-word.length) + wordInstead(word);
    return; 
 }

 var availableWorld = ["medical", "anything"]
 function wordInstead(word) {
    word = word.toLowerCase();
    for(var i=0; i< keyWord.length; i++) {
        if(word.substring(o,keyWord[i].length) == keyWord[i]) {
            return availableWorld[i];
        }
    }
}
