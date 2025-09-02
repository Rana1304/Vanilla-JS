function validate() {
  let fName = document.getElementById("fName").value;
  let email = document.getElementById("email").value;
  let date = document.getElementById("Dob").value;
  let phn = document.getElementById("No").value;
  let gender = document.getElementById("Gender").value;
    
  if (check(fName)&&check(email)&&check(date)&&check(phn)&&check(gender)) {
    window.alert(
      "NAME : " +
        fName + "\n"+
        "Email : " +
        email + "\n"+
        "DOB : " +
        date + "\n"+
        "PHONE Number : " +
        phn + "\n"+
        "Gender : " +
        genderValue);
  } else {
    window.alert(
        "Entry Required"
    );
  }
}

function check(x){
    return x.length>0; 
}