document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.querySelector('.video-container');
    const video = document.getElementById('hero-video');
    const contentWrapper = document.querySelector('.content-wrapper');
    const header = document.querySelector('header'); // Get the header element
    const videoPlayerOverlay = document.getElementById('videoPlayerOverlay');
    const video2 = document.getElementById('video2');
    const closeVideoPlayer = document.getElementById('closeVideoPlayer');

    const videoHeight = videoContainer.offsetHeight;

    // Initially set content-wrapper top margin to video height
    contentWrapper.style.marginTop = `${videoHeight}px`;

    let isAtBottomTriggered = false;

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

        // Detect scroll to bottom and attempting to scroll further
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolledToBottom = window.scrollY >= scrollableHeight - 5; // A small threshold

        if (scrolledToBottom && !isAtBottomTriggered) {
            // Small delay to ensure user intentionally scrolled past
            setTimeout(() => {
                if (window.scrollY >= scrollableHeight - 5) { // Re-check after delay
                    videoPlayerOverlay.classList.add('active');
                    video2.play();
                    isAtBottomTriggered = true;
                    document.body.style.overflow = 'hidden'; // Prevent scrolling while overlay is open
                }
            }, 100);
        } else if (!scrolledToBottom) {
            isAtBottomTriggered = false;
        }
    });

    closeVideoPlayer.addEventListener('click', () => {
        videoPlayerOverlay.classList.remove('active');
        video2.pause();
        video2.currentTime = 0; // Reset video to start
        document.body.style.overflow = ''; // Restore scrolling
    });
});
