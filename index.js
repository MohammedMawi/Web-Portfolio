function copyToClipboard() {
    var emailText = "mohammedmawi@gmail.com";
    var tempInput = document.createElement("input");
    tempInput.value = emailText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    document.querySelector('.email').addEventListener('click', function() {
        var tooltip = document.querySelector('.tooltip');
        tooltip.classList.add('show'); // Here we add the 'show' class
    
        setTimeout(function() {
            tooltip.classList.remove('show'); // And here we remove it after 1.5 seconds
        }, 700);
    });
}
