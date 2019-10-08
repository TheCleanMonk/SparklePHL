function animateBorder() {
    $('p.text-danger').css({
        'border-bottom': '2px solid rgb(65, 78, 255)',
        'border-bottom-height': '2px',
        'transition': '0.4s all ease-in-out',
        'width': '100%',
    });
};
$(function (){
    AOS.init({
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
     AOS.refreshHard();  //optional

});
window.onload = function () {
    var element = document.getElementById('video');
    element.muted = "muted";
}
$(window).scroll(function(){
    //more then or equals to
    if($(window).scrollTop() >= 800 ){
        $( ".sparklePhilly" ).css( "display", "none" );
        $("#mainNav").css("background-color","#2c3e50")
                     .css("transition","1s all ease-in-out");
        $(".svglines").css("display","block");
        for(var i = 1; i <= 4; i++){
            $(".line"+i).css("animation","dash 5s linear forwards");
        }
    //less then 100px from top
    } else {
        $(".svglines").css("display","none");
        $( ".sparklePhilly" ).css( "display", "block");
        $("#mainNav").css("background-color","transparent");
    }
  });