function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML = "";
    }
}


function seterror(id, error) {
    // Get the element by ID
    let element = document.getElementById(id);

    // Find the first element with class 'formerror' inside it and set the error message
    let errorElement = element.getElementsByClassName('formerror')[0];

    if (errorElement) {
        errorElement.innerHTML = error;
    }
}

function validateForm() {
    var returnval = true;

    // sare error ko clear karne ke liye.
    clearErrors();

    // Perform validation and if validation fails, set returnval to false
    var name = document.forms['myForm']["fname"].value;
    
    if(name.length < 5 ) {
        seterror("name", "*Length of name is too short!");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    
    if(email.length > 25 ) {
        seterror("email", "*Email length is too long!");
        returnval = false;
    }
    var phone = document.forms['myForm']["fphone"].value;
    
    if(phone.length != 10 ) {
        seterror("phone", "*Phone length must 10 digit!");
        returnval = false;
    }
    
    var password = document.forms['myForm']["fpass"].value;
    if(password.length < 8){
        seterror("pass","*Password should be atleat 8 character long!");
        returnval = false;
    }
    if(password.search(/[0-9]/) === -1){
        seterror("pass","*Password should be atleat one Digit");
        returnval = false;
    }
    if(password.search(/[A-Z]/) === -1){
        seterror("pass","*Password should be at leat Upper Case letter.");
        returnval = false;
    }
    if(password.search(/[a-z]/) === -1){
        seterror("pass","*Password should be at leat lower Case.");
        returnval = false;
    }
    if(password.search(/[!\@\#\$\%\^\&\*]/) === -1){
        seterror("pass","*Password should be at leat special Symbol.");
        returnval = false;
    }
    

    
    var cpassword = document.forms['myForm']["fcpass"].value;
    if(cpassword != password ){
        
        seterror("cpass","*Password and Confirm Password Should be Same!");
        returnval = false;
    }
   
   

    return returnval; // The form will not submit if returnval is false.
}
