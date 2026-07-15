window.addEventListener('load', function() {
    const footer = document.querySelector('.footer');

    footer.innerHTML=`
    <section>
        <img src= "./images/logoW.png" alt="Logo white" class="footer-logo">
        </section>

        <div style="display:block;">
            <h3> Site links </h3>
        <ul class="interactive-list">
                <li><a href="board.html">Boarding</a></li>
                <li><a href="groom.html">Grooming</a></li>
                <li><a href="product.html">Product</a></li>
        </ul>

            <h4> &copy; 2026 All rights reserved </h4>

        </div>`
        
});
