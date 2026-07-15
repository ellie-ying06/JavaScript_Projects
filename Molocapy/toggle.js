const toggle = document.getElementById("toggle");
const body = document.body;
const logo = document.getElementById("logo");
const carticon = document.getElementById("carticon");

toggle.addEventListener('click', () => {
    //toggle for slider
    toggle.classList.toggle('dark');

    //toggle body class (Dark Mode)
    body.classList.toggle('dk-menu');

    //change to Dark Mode logo & icon
    if (body.classList.contains('dk-menu')) {
        logo.src = "images/logoW.png"; //Dark Mode logo
        carticon.src= "images/whitecart.png";//Dark Mode cart
    } else {
        logo.src = "images/logoO.png"; //Light Mode logo
        carticon.src= "images/orangecart.png"; //Light Mode cart
    }
    
});
