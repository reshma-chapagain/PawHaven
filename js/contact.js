$(document).ready(function () {

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
        if (name === "") {
            $("#nameError").text("Please enter your full name");
            valid = false;
        }

        // Email
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            $("#emailError").text("Please enter your email");
            valid = false;
        }
        else if (!emailPattern.test(email)) {
            $("#emailError").text("Please enter a valid email");
            valid = false;
        }

        // Phone
        let phonePattern = /^[0-9]{10}$/;

        if (phone === "") {
            $("#phoneError").text("Please enter your phone number");
            valid = false;
        }
        else if (!phonePattern.test(phone)) {
            $("#phoneError").text("Phone number must be exactly 10 digits");
            valid = false;
        }
        else if (phone === "0000000000") {
            $("#phoneError").text("Please enter a valid phone number");
            valid = false;
        }

        // Address
        if (address === "") {
            $("#addressError").text("Please enter your address");
            valid = false;
        }

        // Pet Preference
        if (pet === "") {
            $("#petError").text("Please enter your pet preference");
            valid = false;
        }

        // Date
        if (date === "") {
            $("#dateError").text("Please select an appointment date");
            valid = false;
        }

        // Message
        if (message === "") {
            $("#messageError").text("Please enter your message");
            valid = false;
        }

        // Success
        if (valid) {

            $("#formBox").fadeOut(500, function () {

                $("#thankBox")
                    .css("display", "flex")
                    .hide()
                    .fadeIn(600)
                    .addClass("show");

            });

            // Reset form
            $("#adoptForm")[0].reset();

            // Remove Datepicker value
            $("#date").val("");

            // Clear old error messages
            $(".error").text("");

        }

    });

});