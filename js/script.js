
(function () {
    var offset = 300;
    var duration = 300;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });

    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.slider').slider();
})();
