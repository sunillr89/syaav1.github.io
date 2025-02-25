/* global WCF_ADDONS_JS */
(function($) {
    /**
     * @param $scope The Widget wrapper element as a jQuery element
     * @param $ The jQuery alias
     */
    const HeloVideo = function($scope, $) {

        const wrapper = $('.helo--video', $scope);
        const video = $('.helo--video .video', $scope);
        const play_video = $('.helo--video .play-video', $scope);

        video.on('click', function() {
            if (this.paused) {
                wrapper.removeClass('overlay');
                this.play();
            } else {
                wrapper.addClass('overlay');
                this.pause();
            }
            play_video.toggle();
        })
    };

    // Make sure you run this code under Elementor.
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/helo--video.default', HeloVideo);
    });
})(jQuery);