
if (!sessionStorage.getItem("playedAnimation")) {
    $("body").addClass("animation");
    sessionStorage.setItem("playedAnimation", true);
}

// Experimental feature controll
function toggleLogo(id) {
    for (let i = 0; i <= 3; i++) {
        $("body").removeClass("navbar-logo-" + i);
        document.getElementById("navbarLogo" + i).checked = false;
    }
    document.getElementById("navbarLogo" + id).checked = true;
    if (id != 0) {
        $("body").addClass("navbar-logo-" + id);
    }
}

$(function () {
    for (let i = 0; i <= 3; i++) {
        $("#navbarLogo"+i).click(() => toggleLogo(i));
    }

    $("#shadows").click(() => $("body").toggleClass("no-shadows"));
    $("#questionmarkShadow").click(() => $("body").toggleClass("no-questionmark-shadow"));
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
