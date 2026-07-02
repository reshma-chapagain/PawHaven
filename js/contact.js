$(document).ready(function () {

    // Mobile Menu

    $(".menu-toggle").click(function () {

        $("#navLinks").slideToggle();

    });



    // jQuery Datepicker

    $("#date").datepicker({

        minDate: 0,

        dateFormat: "dd-mm-yy"

    });



    // Form Validation

    $("#adoptForm").submit(function (e) {

        e.preventDefault();

        $(".error").text("");

        let valid = true;

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let phone = $("#phone").val().trim();
        let address = $("#address").val().trim();
        let pet = $("#pet").val().trim();
        let date = $("#date").val().trim();
        let message = $("#message").val().trim();



        // Name

        if (name == "") {

            $("#nameError").text("Please enter your full name");

            valid = false;

        }



        // Email

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email == "") {

            $("#emailError").text("Please enter email");

            valid = false;

        }

        else if (!emailPattern.test(email)) {

            $("#emailError").text("Invalid email format");

            valid = false;

        }



        // Phone

        let phonePattern = /^[0-9]{10}$/;

        if (phone == "") {

            $("#phoneError").text("Please enter phone number");

            valid = false;

        }

        else if (!phonePattern.test(phone)) {

            $("#phoneError").text("Phone number must contain exactly 10 digits");

            valid = false;

        }



        // Address

        if (address == "") {

            $("#addressError").text("Please enter address");

            valid = false;

        }



        // Pet Preference

        if (pet == "") {

            $("#petError").text("Please enter pet preference");

            valid = false;

        }



        // Date

        if (date == "") {

            $("#dateError").text("Please select appointment date");

            valid = false;

        }



        // Message

        if (message == "") {

            $("#messageError").text("Please enter message");

            valid = false;

        }



        // Success

        if (valid) {

            $("#formBox").fadeOut(500, function () {

                $("#thankBox").fadeIn(600).addClass("show");

            });

            $("#adoptForm")[0].reset();

        }

    });

});
