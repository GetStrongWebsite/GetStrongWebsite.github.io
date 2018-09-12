$(setup);

if (!sessionStorage.getItem("playedAnimation")) {
    $("body").addClass("animation");
    sessionStorage.setItem("playedAnimation", true);
}

function setup() {
    $("a.print").on("click", function (e) {
        e.preventDefault();
        window.print();
    });

    $('a.page-scroll').click(function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 86
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });

    $(document).on('change', ':file', function () {
        $("label[for='" + $(this).attr("id") + "']").html($(this).val().replace(/\\/g, '/').replace(/.*\//, ''));
    });
}

// Manage calendar hight and loading spinner
$(window).on("message", function (message) {
    message = message.originalEvent;
    if (message.origin == "https://www.regnumchristi.eu" && message.data && message.data.cal) {
        document.querySelector(".calendar iframe").width = message.data.width;
        document.querySelector(".calendar iframe").height = message.data.height;
        document.querySelector(".calendar iframe").style.maxWidth = message.data.maxWidth;

        $(".calendar").removeClass("loading");
        setTimeout(() => $(".calendar .spinner").remove(), 1000);
    }
});

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
        $("#navbarLogo" + i).click(() => toggleLogo(i));
    }

    $("#navbarHoverBg").click(() => $("body").toggleClass("no-navbar-hover-bg"));
    $("#shadows").click(() => $("body").toggleClass("no-shadows"));
    $("#questionmarkShadow").click(() => $("body").toggleClass("no-questionmark-shadow"));
    $("#pinExperimental").click(() => $(".experimental").toggleClass("pin"));
});

// remove the focused state after click,
// otherwise bootstrap will still highlight the link
$("a").mouseup((e) => e.delegateTarget.blur());

