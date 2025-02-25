/* global WCF_ADDONS_JS */
(function($) {
    /**
     * @param $scope The Widget wrapper element as a jQuery element
     * @param $ The jQuery alias
     */
    const HeloService = function($scope, $) {

        // Active by default
        $('.helo__service.style-2 .image img:nth-child(1)').addClass('active');
        $('.helo__service.style-2 .item:nth-child(1)').addClass('active');

        // gsap related
        if ('object' === typeof gsap) {

            let gsap_mm = gsap.matchMedia();

            gsap_mm.add(`(min-width: 768px)`, () => {
                let sections = $('.helo__service .item', $scope);

                // Progress
                let scrollTimer = -1;
                let updateProgress = function(self) {
                    $('.progress-circle', $scope).css('opacity', 1);

                    if (scrollTimer != -1) {
                        clearTimeout(scrollTimer);
                    }
                    scrollTimer = window.setTimeout(() => {
                        $('.progress-circle', $scope).css('opacity', 1);
                    }, 300);

                    const scrolled = self.progress * 100;
                    const itemPercent = 100 / sections.length;
                    const items = scrolled / itemPercent;

                    $('.progress-circle', $scope).css('--count', items.toFixed(0))
                    $('.progress-circle', $scope).css('--value', scrolled.toFixed(0))

                    // Active Image
                    $('.helo__service.style-2 .image img:nth-child(' + Math.ceil(items) + ')', $scope).addClass('active').siblings().removeClass('active');
                    $('.helo__service.style-2 .item:nth-child(' + Math.ceil(items) + ')', $scope).addClass('active').siblings().removeClass('active');
                }

                // Get Animation settings
                const obj = $($('.helo__service', $scope)[0]).data('settings') || {};

                // let obj = {
                //     ease: "none",
                //     scrollTrigger: {
                //         trigger: $scope,
                //         pin: $('.helo__service .pin-wrap', $scope),
                //         pinSpacing: true,
                //         scrub: 1,
                //         start: "top top",
                //         end: "bottom bottom+=-358",
                //     }
                // }

                obj.scrollTrigger.onUpdate = (self) => {
                    updateProgress(self);
                }

                gsap.to(sections, obj);
            });
        }

        // Image Moving
        if (screen.width > 1024) {
            console.log('working');
            const serviceImgItem = document.querySelectorAll(".helo__service.style-1 .item");

            function followImageCursor(event, serviceImgItem) {
                const contentBox = serviceImgItem.getBoundingClientRect();
                const dx = event.clientX - contentBox.x;
                const dy = event.clientY - contentBox.y;
                serviceImgItem.lastElementChild.style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
            }

            serviceImgItem.forEach((item, i) => {
                item.addEventListener("mousemove", (event) => {
                    setInterval(followImageCursor(event, item), 1000);
                });
            });
        }

    };

    // Make sure you run this code under Elementor.
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/helo--service.default', HeloService);
    });
})(jQuery);