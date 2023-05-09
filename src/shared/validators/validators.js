export function emailValidator(email)
{
   const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\c\o\m]/;
   if (!emailRegex.test(email)) 
   return { 
       value: email, status: true, error: "Please! Enter valid email address"
    }
   if (!email) 
   return { 
       value: email, status: true, error: "Email can't be Empty" 
   }
   return { value: email, status: false, error: "" }
}


export function NameValidtor(name) {

   if (!name) 
   return { 
       value: name, status: true, error: "Full Name can't be Empty" }

   return { value: name, status: false, error: "" }
}


export function PhoneValidator(value) {

    var phoneno = /^\+923?([0-9]{10})$/;

  // var phoneno = /^\+?([0-9]{2})\)?[-]?([0-9]{3})[ ]?([0-9]{3})?[-]?([0-9]{4})$/;
  if (value.match(phoneno)) {
    return { value: value, error: "", status: false }
  }
  else {
    ///alert("Invalid Input");
    return { value: value, status: true, error: "You have entered an invalid phone number like +92xxxxxxxxxx" }

  }
}

export function BloodValidtor(name) {

    if (!name) 
    return { 
        value: name, status: true, error: "Choose your blood group" }
 
    return { value: name, status: false, error: "" }
 }
 export function DOBValidtor(name) {

    if (!name) 
    return { 
        value: name, status: true, error: "Please choose your date of birth" }
 
    return { value: name, status: false, error: "" }
 }
 export function GenderValidtor(name) {

    if (!name) 
    return { 
        value: name, status: true, error: "Please select your gender" }
 
    return { value: name, status: false, error: "" }
 }
 export function LocationValidtor(name) {

    if (!name) 
    return { 
        value: name, status: true, error: "Please enter your location" }
 
    return { value: name, status: false, error: "" }
 }