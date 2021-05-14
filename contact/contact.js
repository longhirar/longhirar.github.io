$('.submit-button').on("click", () => {
    console.log('sending process started;')
    swal({
        button: false,
        closeOnEsc: false,
        closeOnClickOutside: false,
        content: "Loading...",
    })
    console.log('shown loading, concatenating...')

    var webhook_contact_form = "https://discord.com/api/webhooks/842186264282267668/F3eft-mSzU_SnLlJrR6P0CBDtzXr0vOacMGRnZRAkxm6OufUV4_RxTTWEzmXEztpldPZ";

    let message = "**Name:** %name%\n**Contact:** %contact%\n\n**Message:** %msg%";
    message = message.replace("%name%", $('#i_name').val().replace('"', '').replace("'", '') );
    message = message.replace("%contact%", $('#i_contact').val().replace('"', '').replace("'", '') );
    message = message.replace("%msg%", $('#i_message').val().replace('"', '').replace("'", '') );

    console.log('concatenated, sending....')

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://lgr-github.herokuapp.com/contactme.php", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send("msg=".concat(message));

    swal("", "Message Sent!", "success");

    console.log('sent;')
})