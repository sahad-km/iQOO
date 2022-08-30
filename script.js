$(document).ready(function(){
    $("#contact-form").validate({
        errorClass: 'errors',
        validClass: 'valid',
        rules:{
            entry,2034894353:{
                required:true,
            },
            entry,740153354:{
                email:true,
                required:true,
            },
            entry,388632024:{
                required:true,
                minlength:8,
            }
        }
    })
})

function sendemail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "sahadmuhammedkm123@gmail.com",
        Password : "sajamajeed",
        To : 'muhammedsahadkm28480@gamil.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}