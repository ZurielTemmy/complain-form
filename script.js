function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "temitopezurishadai@gmail.com",
        Password : "festaclaqos",
        To : 'temitopezurishaddai@gmai.com',
        From : document.getElementById('email').value,
        Subject : 'New Complain',
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}