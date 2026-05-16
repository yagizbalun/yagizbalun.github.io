/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Easter Egg Logic
    const easterEggTrigger = document.getElementById('easter-egg-trigger');
    const izolasyonModal = document.getElementById('izolasyon-modal');

    if (easterEggTrigger && izolasyonModal) {
        let clickCount = 0;
        let clickTimer;

        easterEggTrigger.addEventListener('click', () => {
            clickCount++;
            if (clickCount === 1) {
                clickTimer = setTimeout(() => {
                    clickCount = 0; // 2 saniye dolarsa sayacı sıfırla
                }, 2000);
            }
            if (clickCount === 5) {
                clearTimeout(clickTimer);
                clickCount = 0;
                izolasyonModal.style.display = 'flex'; // Modal penceresini görünür yap
            }
        });

        // Modala tıklandığında pencereyi kapat
        izolasyonModal.addEventListener('click', () => {
            izolasyonModal.style.display = 'none';
        });
    }

});
