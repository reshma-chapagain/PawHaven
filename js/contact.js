$(document).ready(function(){



// jQuery Datepicker

$("#date").datepicker({

    minDate:0,

    dateFormat:"dd-mm-yy"

});





$("#adoptForm").submit(function(e){


e.preventDefault();



$(".error").text("");



let valid=true;


let phone=$("#phone").val();

let email=$("#email").val();





if($("#name").val()==""){

$("#nameError").text("Enter name");

valid=false;

}



if(email=="" || !email.includes("@")){

$("#emailError").text("Enter valid email");

valid=false;

}



if(phone.length!=10 || isNaN(phone)){


$("#phoneError").text("Phone must be 10 digits");

valid=false;


}



if($("#address").val()==""){

$("#addressError").text("Enter address");

valid=false;

}



if($("#pet").val()==""){

$("#petError").text("Enter pet preference");

valid=false;

}



if($("#date").val()==""){

$("#dateError").text("Select date");

valid=false;

}



if($("#message").val()==""){

$("#messageError").text("Enter message");

valid=false;

}





if(valid){



$("#formBox").fadeOut(500);



setTimeout(function(){


$("#thankBox").addClass("show");


},500);




$("#adoptForm")[0].reset();


}



});



});