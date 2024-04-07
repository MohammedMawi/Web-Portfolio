document.addEventListener('DOMContentLoaded', function() {
    function copyToClipboard() {
        var emailText = "mohammedmawi@gmail.com";
        var tempInput = document.createElement("input");
        tempInput.value = emailText;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    }

    document.querySelector('.email').addEventListener('click', function() {
        copyToClipboard(); // Call the copyToClipboard function when .email is clicked

        var tooltip = document.querySelector('.tooltip');
        tooltip.classList.add('show'); // Here we add the 'show' class
    
        setTimeout(function() {
            tooltip.classList.remove('show'); // And here we remove it after 1.5 seconds
        }, 1500);
    });

    document.querySelector('.proj span').addEventListener('click', function() {
        var myProjectsTitle = document.querySelector('.title');
        myProjectsTitle.scrollIntoView({ behavior: 'smooth' });
    });
});