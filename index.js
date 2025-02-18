function validatePassword(x, y){
    var matchBool = true;

    //check if strings are same length
    if (x.length != y.length){
        matchBool = false;
    }
    //check if characters are same
    //loop thru each char and compare
    //only loop thru 1 string because lentgsh should be the same at this point
    for (var i = 0; i< x.length; i++){
        if (x[i] != y[i]){
            matchBool = false;
        }
    }
    //check if at least 8  characters
    if (i < 7){
        matchBool = false;
    }
    //check if has at least 1 upper and lowercase letter
    //dont check for y because x and y should be the same at this point
    if (x === x.toUpperCase() || x === x.toLowerCase()){
        matchBool = false;
    }
    //check for int in string
    for (var j = 0; j < x.length; j++){
        if (x[j] != parseInt(x[j])){
            matchBool = false;
        }
    }

function reversePassword(x, y){
    var newPass;
    if (validatePassword(x, y)){
        for (let i = x.length; i > 0; i--){
            newPass[0] = x[0];
        }
    }
    return newPass;
}



    return matchBool;
}