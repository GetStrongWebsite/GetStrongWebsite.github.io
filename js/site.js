
if (!sessionStorage.getItem("playedAnimation")) {
    $("body").addClass("animation");
    sessionStorage.setItem("playedAnimation", true);
}

// Write your Javascript code.
$(function () {
    $("#navbarLogo").click(() => $("body").toggleClass("navbarLogo"));
    $("#shadows").click(() => $("body").toggleClass("no-shadows"));
    $("#fontNormal").click(() => $("body").toggleClass("font-weight-normal"));
    $("#headingBold").click(() => $("body").toggleClass("heading-bold"));
    $("#pinExperimental").click(() => $(".experimental").toggleClass("pin"));
});

// Scroll buttons
$(function () {
    $('a.page-scroll').click(function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 86
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });
});

// remove the focused state after click,
// otherwise bootstrap will still highlight the link
$("a").mouseup((e) => e.delegateTarget.blur());
