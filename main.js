document.addEventListener("keydown", function (event) {

    if (event.ctrlKey) {

        event.preventDefault();

    }

    if (event.keyCode == 123) {

        event.preventDefault();

    }

});

document.addEventListener('contextmenu',
    event => event.preventDefault()
);

function op() {
    var field2 = document.getElementById("input-field2").value;
    if (field2 === "test")
        document.location.href = "/index.html"

    else {
        alert("invaild information")
    }
}  