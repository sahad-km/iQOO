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