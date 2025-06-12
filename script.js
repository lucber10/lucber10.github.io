document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.querySelector('.video-container');
    const video = document.getElementById('hero-video');
    const contentWrapper = document.querySelector('.content-wrapper');

    const videoHeight = videoContainer.offsetHeight;

    // Initially set content-wrapper top margin to video height
    contentWrapper.style.marginTop = `${videoHeight}px`;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (scrollY > videoHeight) {
            videoContainer.classList.add('scrolled');
            contentWrapper.style.marginTop = '0'; // Reset margin when scrolled
        } else {
            videoContainer.classList.remove('scrolled');
            contentWrapper.style.marginTop = `${videoHeight - scrollY}px`;
        }
    });
});
