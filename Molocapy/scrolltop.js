document.addEventListener("DOMContentLoaded", function () {  /*Wait until the DOM is fully loaded before looking for the button*/
    let mybutton = document.querySelector(".scroll-to-top");

    /*If button doesn't exist on current page, stop the script*/
    if (!mybutton) return;

    /*When scrolled down 600px,show button*/
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        /*Using Math.max safely handles cross-browser math anomalies*/
        let scrollPos = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        
       if (scrollPos>600) {
            mybutton.classList.add("show");    /*fades in*/
        } else {
            mybutton.classList.remove("show"); /*fades out*/
        }
    } 
    setTimeout(scrollFunction, 100);

    /*Jump to top when clicked*/
    mybutton.addEventListener("click",function() {
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
    });
});
