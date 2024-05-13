// Wait for the DOM content to load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Define a function to copy the email to the clipboard
    function copyToClipboard() {

        // This line creates a new <input> element in memory
        var tempInput = document.createElement("input");

        // It sets the value of the <input> element to the email address ("mohammedmawi@gmail.com")
        tempInput.value = "mohammedmawi@gmail.com";

        // This line appends the newly created <input> element to the <body> of the HTML document
        document.body.appendChild(tempInput);

        // It selects the text inside the <input> element. In this case, it selects the email address
        tempInput.select();

        // This line executes the copy command, which copies the selected text (the email address) to the clipboard. It knows to copy the selected text because the select() method was called in the previous step.
        document.execCommand("copy");

        // Finally, this line removes the temporary <input> element from the document body. This cleanup step ensures that the DOM is not cluttered with unnecessary elements after the operation.
        document.body.removeChild(tempInput);
    }

    // Add a click event listener to the element with the class "email"
    document.querySelector('.econtain').addEventListener('click', function() {
        // Call the copyToClipboard function when the "email" element is clicked
        copyToClipboard();

        // Get the tooltip element
        var tooltip = document.querySelector('.tooltip');

        // Add the "show" class to the tooltip to make it visible
        tooltip.classList.add('show');

        // After 700 milliseconds (0.7 seconds), remove the "show" class to hide the tooltip
        setTimeout(function() {
            tooltip.classList.remove('show');
        }, 700);
    });

    // Add a click event listener to the span inside the element with the class "proj"
    document.querySelector('.proj span').addEventListener('click', function() {
        // Get the title element
        var myProjectsTitle = document.querySelector('.title');

        // Scroll to the title element smoothly
        myProjectsTitle.scrollIntoView({ behavior: 'smooth'});
    });
});