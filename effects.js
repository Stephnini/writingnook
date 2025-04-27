document.addEventListener("DOMContentLoaded", function() {

    // 1. FOOTER SCROLL SHOW
    window.addEventListener("scroll", function() {
        let footer = document.querySelector("footer");
        let scrollPosition = window.scrollY + window.innerHeight;
        let pageHeight = document.body.offsetHeight;

        if (scrollPosition >= pageHeight - 50) { 
            footer.classList.add("show");
        } else {
            footer.classList.remove("show");
        }
    });

    // 2. SPARKLE PARTICLES ON CLICK
    document.addEventListener("click", function(e) {
        for (let i = 0; i < 5; i++) { // Create 5 sparkles per click
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            document.body.appendChild(sparkle);

            sparkle.style.left = `${e.pageX + (Math.random() * 40 - 20)}px`;
            sparkle.style.top = `${e.pageY + (Math.random() * 40 - 20)}px`;

            sparkle.addEventListener('animationend', () => {
                sparkle.remove();
            });
        }
    });

    // 3. HIDE LOADING SCREEN AFTER A LITTLE
    setTimeout(function() {
        document.getElementById('loading-screen').classList.add('hidden');
    }, 500);

});
