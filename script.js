/*Javascript*/

function toggleDarkLight(){
    var element = document.body;
    element.classList.toggle("dark-light");
    const mainFonts = document.querySelectorAll('p, h1, h2. h3');
    mainFonts.style.color = "#000000";
}