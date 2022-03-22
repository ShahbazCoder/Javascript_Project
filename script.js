document.write("Welcome to Webskitter Front-End Development Course<br>");

document.write("Welcome to JavaScript");
function formData(){
    var fname = document.forms["userform"]["firstname"];
    var lname = document.forms["userform"]["lastname"];
    var country = document.forms["userform"]["country"];
    
    if (fname.value == ""){
        window.alert("Please enter your first name");
        fname.focus();
        return false;
    }
    if (lname.value == ""){
        window.alert("Please enter your last name");
        fname.focus();
        return false;
    }
    if (country.value == ""){
        window.alert("Please enter your country name");
        country.focus();
        return false;
    }
    
    return true;
}