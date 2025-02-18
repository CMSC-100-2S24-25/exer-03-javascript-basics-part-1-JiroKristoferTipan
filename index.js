function validatePassword(x, y){
    var matchBool = true;
    var errorType;

    //check if strings are same length
    if (x.length != y.length){
        matchBool = false;
        errorType = 1;
    }

    //check if characters are same
    //loop thru each char and compare
    //only loop thru 1 string because lentgsh should be the same at this point
    for (var i = 0; i< x.length; i++){
        if (x[i] != y[i]){
            matchBool = false;
            errorType = 2;
        }
    }

    //check if at least 8  characters
    if (i < 7){
        matchBool = false;
        errorType = 3;
    }

    //check if has at least 1 upper and lowercase letter
    //dont check for y because x and y should be the same at this point
    if (x == x.toUpperCase() || x == x.toLowerCase()){
        //console.log(x.toUpperCase());
        //console.log(x);
        matchBool = false;
        errorType = 4;
    }
    //check for int in string
    for (var j = 0; j < x.length; j++){
        //console.log(Number.isInteger(parseInt(x[j])));
        if(Number.isInteger(parseInt(x[j]))){
            break;
        }
        if (j == (x.length) - 1){
            matchBool = false;
            errorType = 5;
        }
    }
    //console.log(matchBool);
    //console.log(errorType);
    return matchBool;
}

function reversePassword(x){
    var newPass;
    for (let i = x.length; i > 0; i--){
        if (i == x.length){
            newPass = x[i-1];
        } else{
            newPass = newPass + x[i-1];
        }
    }
    //console.log(newPass);
    return newPass;
}

function storePassword(name, pass1, pass2){
    const user = {
        name: "placeholder",
        newpassword: "placeholder"
    }

    //if same password, reverse then store as object
    if (validatePassword(pass1, pass2)){
        var newPass = reversePassword(pass1);
        user.name = name;
        user.newpassword = newPass;

    } 
    //store 1st password then store
    else{
        user.name = name;
        user.newpassword = pass1;
    }
    //console.log(user);
    return user;
}


//check input 
console.log(validatePassword("helloworld", "hello")); // returns false
console.log(validatePassword("hello", "hello")); // returns false
console.log(validatePassword("hello1234", "hello1234")); // returns false
console.log(validatePassword("Hello1234", "Hello1234")); // returns true
console.log(validatePassword("HELLO1234", "HELLO1234")); // returns false

console.log(reversePassword("tacocat1"));
console.log(reversePassword("abcdefg"));
console.log(reversePassword("racecar"));

console.log(storePassword("John", "Pass1234", "Pass1234")); // returns {name: &quot;John&quot;, newpassword:&quot;4321ssaP&quot;}
console.log(storePassword("John", "Pass123", "Pass12345")); // returns {name: &quot;John&quot;, newpassword:&quot;Pass123&quot;}
