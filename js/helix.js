/**
 * app to handle the contact form
 */
(function () {

    // stops the form from being submitted by the page
    $("#contactForm").submit(function () {
        return false;
    });

    // stops the form from being submitted by the page
    $("#submitForm").click(function () {
        var formData = $('#contactForm').serializeArray();
        console.log(JSON.stringify(formData));

        $.ajax({
            url: 'api/contactus',
            type: 'POST',
            data: formData
        })
            .success(function (res) {
                console.log("SUCCESS", data);
            })
            .error(function (res) {
                console.log("ERROR", res);
            });

        return false;
    });
})();
