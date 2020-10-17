/* Code for get in touch button*/

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// function cleartext() {
//     document.getElementById("tx1").value = " "
// }

function goClick(inputText) {
    {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (inputText.value.match(mailformat)) {
            var userInput = document.form1.text1.value;
            var msg = "You are now subcribe of Maniva Digitl with email id:";
            // var blob = new Blob([userInput], { type: "text/plain;charset=utf-8" });
            // saveAs(blob, "email_sub.txt");

            var file = new File([msg, userInput], "maniva_sub_email.txt", { type: "text/plain;charset=utf-8" });
            saveAs(file);

            alert("Thank you for being our subscriber!!!");
            document.form1.text1.focus();
            return true;
        } else {
            alert("Enter Valid Email Address!!!");
            document.form1.text1.focus();
            return false;
        }

    }
}