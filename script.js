document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.querySelector('.video-container');
    const video = document.getElementById('hero-video');
    const contentWrapper = document.querySelector('.content-wrapper');
    const header = document.querySelector('header'); // Get the header element

    const videoHeight = videoContainer.offsetHeight;

    // Initially set content-wrapper top margin to video height
    contentWrapper.style.marginTop = `${videoHeight}px`;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (scrollY > videoHeight) {
            videoContainer.classList.add('scrolled');
            contentWrapper.style.marginTop = '0'; // Reset margin when scrolled
            header.classList.add('scrolled'); // Add scrolled class to header
        } else {
            videoContainer.classList.remove('scrolled');
            contentWrapper.style.marginTop = `${videoHeight - scrollY}px`;
            header.classList.remove('scrolled'); // Remove scrolled class from header
        }
    });
});
