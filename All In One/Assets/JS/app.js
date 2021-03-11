//Input On Blur Label Up

let label = $('#blur-label');
let input = $('#blur-input');

$(input).on('focus', function () {
    $(label).removeClass('land');
    $(label).addClass('fly');
})

$(input).on('blur', function () {
    if ($(input).val().length > 0) {
        return false;
    }
    else {
        $(label).removeClass('fly');
        $(label).addClass('land');
    }
})

//Tooltip Customization

tippy('.handmade-a-fb', {
    content: 'Facebook',
    placement: 'bottom-end',
    theme: 'bilesuvar12'
});


tippy('.handmade-a-ig', {
    content: 'Instagram',
    placement: 'bottom-end',
    theme: 'bilesuvar12'
});

tippy('.handmade-a-in', {
    content: 'Linkedin',
    placement: 'bottom-end',
    theme: 'bilesuvar12'
});

//DrawSVG

let svgDiv = $('.draw-svg-div');

let firstSvgCol = $('.first-svg-col');
let secondSvgCol = $('.second-svg-col');
let thirdSvgCol = $('.third-svg-col');
let fourthSvgCol = $('.fourth-svg-col');
let fifthSvgCol = $('.fifth-svg-col');
let sixthSvgCol = $('.sixth-svg-col');

const firstSvg = $('.first-svg').drawsvg();
const secondSvg = $('.second-svg').drawsvg();
const thirdSvg = $('.third-svg').drawsvg();
const fourthSvg = $('.fourth-svg').drawsvg();
const fifthSvg = $('.fifth-svg').drawsvg();
const sixthSvg = $('.sixth-svg').drawsvg();

$(firstSvgCol).on('mouseenter', function () {
    $(firstSvg).drawsvg('animate');
})

$(secondSvgCol).on('mouseenter', function () {
    $(secondSvg).drawsvg('animate');
})

$(thirdSvgCol).on('mouseenter', function () {
    $(thirdSvg).drawsvg('animate');
})

$(fourthSvgCol).on('mouseenter', function () {
    $(fourthSvg).drawsvg('animate');
})

$(fifthSvgCol).on('mouseenter', function () {
    $(fifthSvg).drawsvg('animate');
})

$(sixthSvgCol).on('mouseenter', function () {
    $(sixthSvg).drawsvg('animate');
})


let odometerDiv = document.querySelector('.odometer-div');

// Navbar Hide On Scroll Down, Show On Scroll Up
let prevPageYOffset = window.pageYOffset;
window.addEventListener('scroll', function () {
    let nav = document.querySelector('.nav-operations');

    let currentPageYOffset = window.pageYOffset;

    if (prevPageYOffset > currentPageYOffset) {
        nav.style.top = "0";
    }
    else {
        nav.style.top = "-150px";
    }

    prevPageYOffset = currentPageYOffset;

    // Navbar Hide On Scroll Down, Show On Scroll Up

    // Line Indicator

    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scroll / height) * 100;

    let lineIndicator = document.querySelector('.line-indicator');

    lineIndicator.style.width = `${scrolled}%`;

    // Line Indicator

    let scrollTopjQuery = $(window).scrollTop();
    let offset = $(svgDiv).offset().top;

    if ($(scrollTopjQuery) >= $(offset)) {
        const svg = $('.svg').drawsvg();
        svg.drawsvg('animate');
        setTimeout(function () {
            $(svg).removeClass('svg');
        }, 1000);
    }

    let scrollTop = window.scrollY;
    let offsetOdometer = odometerDiv.offsetTop;
    if (scrollTop >= 1674) {

        setTimeout(() => {
            odometer.innerHTML = 1500;
        });
    }

    console.log(`${scrollTop}, ${offsetOdometer}`);
})

// Line Scale on Input Focus

let focusInput = $('.scale-hover');

let scaleLine = $('.focus-line');

$(focusInput).on('focus', function (e) {
    $(scaleLine).removeClass('focus-line-smaller');
    $(scaleLine).addClass('focus-line-bigger');
})

$(focusInput).on('blur', function (e) {
    $(scaleLine).removeClass('focus-line-bigger');
    $(scaleLine).addClass('focus-line-smaller');
})

// Line Scale on Input Focus