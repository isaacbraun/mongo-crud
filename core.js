/**
 * MongoDB Crud Core JS
 * @description - Core JS for MongoDB Crud Page
 * @version - 1.0.0
 * @license - MIT
 * @updated - 11/13/2023
 */
const MONGO = (function createCoreClass() {
    /**
     * Initialize instance with options
     * @param {Object} options - Options for the class
     * @returns {void}
     */
    function init(options) {
        // Remove .no-js class from html tag
        document.querySelector('html').classList.remove('no-js');

        // Run core functions
        fadeComponents();

        /**
         * Fade in Components on Scroll
         * @description - Initializes IntersectionObserver to fade in components on scroll
         * @returns {void}
         */
        function fadeComponents() {
            const fadeComponents = document.querySelectorAll('.component');

            // Check if IntersectionObserver is supported
            if ('IntersectionObserver' in window) {
                // Create observer
                const observer = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        // If element is in view, add class to fade in
                        if (entry.isIntersecting) {
                            entry.target.classList.add('faded-in');
                            observer.unobserve(entry.target);
                        }
                    });
                }, {
                    root: null,
                    rootMargin: '0px 0px -200px 0px',
                    threshold: 0,
                });

                // Loop through components and observe each one
                fadeComponents.forEach(component => {
                    observer.observe(component);
                });
            } else {
                // If IntersectionObserver is not supported, add class to fade in
                fadeComponents.forEach(component => {
                    component.classList.add('faded-in');
                });
            }
        }
    }

    return {
        init,
    };
})();

MONGO.init();