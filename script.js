$(document).ready(function() {
    const slider = $(".slider");
    const slideWidth = $(".slider img").width();
    let currentIndex = 0;

    function slideTo(index) {
        if (index < 0) {
            index = 0;
        } else if (index >= slider.children().length) {
            index = slider.children().length - 1;
        }
        const offset = -index * slideWidth;
        slider.css("transform", `translateX(${offset}px)`);
        currentIndex = index;
    }

    $(".prev-btn").click(function() {
        slideTo(currentIndex - 1);
    });

    $(".next-btn").click(function() {
        slideTo(currentIndex + 1);
    });

    // Apply the effect when the page loads
    function applyEffect() {
        const currentSlide = slider.children().eq(currentIndex);
        const effect = currentSlide.data("effect");
        slider.removeClass().addClass("slider").addClass(effect);
    }

    applyEffect();
});
