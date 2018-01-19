$(document).ready(function () {
    $("#signin").click(function () {
        //collect username and password entered by users
        var username = $("#username").val();
        var password = $("#password").val();

        auth(username, password);
    });
});

function auth(username, password) {
    $.ajax({
        type: "POST",
        url: "http://quadcore.news/register",
        dataType: 'json',
        async: false,
// data: '{"username": "' + username + '", "password" : "' + password + '"}',
        data: {
            "username": username,
            "password": password
        },
        success: function (response) {
            alert(JSON.stringify(response));
        }
    })
}

