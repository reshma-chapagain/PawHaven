let form = document.getElementById("adoptForm");

let formBox = document.getElementById("formBox");

let thankBox = document.getElementById("thankBox");

let error = document.getElementById("error");



form.addEventListener("submit", function(e){


e.preventDefault();



let phone = document.getElementById("phone").value;

let email = document.getElementById("email").value;



if(phone.length != 10 || isNaN(phone)){


error.innerHTML = "Phone number must be exactly 10 digits";

return;


}



if(!email.includes("@")){


error.innerHTML = "Enter a valid email";


return;


}




formBox.style.display="none";

thankBox.style.display="flex";


});