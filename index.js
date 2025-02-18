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



    for (var j = 0; j < x.length; j++){
        if (x[j] != x[j].toUpperCase() && )
    }


    return matchBool;
}