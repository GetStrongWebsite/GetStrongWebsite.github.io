
if (!sessionStorage.getItem("playedAnimation")) {
    $("body").addClass("animation");
    sessionStorage.setItem("playedAnimation", true);
}

// Write your Javascript code.
$(function () {
    $("#parallax1").click(() => $("body").toggleClass("parallax1"));
    $("#parallax2").click(() => $("body").toggleClass("parallax2"));
    $("#navbarLogo").click(() => $("body").toggleClass("navbarLogo"));
    $("#shadows").click(() => $("body").toggleClass("no-shadows"));
    $("#fontUbuntu").click(() => $("body").toggleClass("font-ubuntu"));
    $("#fontSquash").click(() => $("body").toggleClass("font-squash"));
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