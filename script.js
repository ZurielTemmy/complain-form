function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "temitopezurishadai@gmail.com",
        Password : "festaclaqos",
        To : 'temitopezurishaddai@gmai.com',
        From : document.getElementById('email').value,
        Subject : 'New Complain',
        Body : 'Name: ' + document.getElementById('name').value
                + '<br> Email: ' + document.getElementById('email').value
                + '<br> Phone number: ' + document.getElementById('phone').value
                + '<br> Complain: ' + document.getElementById('message').value
    }).then(
      message => alert(message)
    );
}