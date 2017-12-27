/*
 *****************************************************
 *	CUSTOM JS DOCUMENT                              *
 *	Single window load event                        *
 *   "use strict" mode on                            *
 *****************************************************
 */
$(window).on('load', function() {

    "use strict";

    var searchpopup = $('.serach-popup-box');
    var addClassess = $("#addClass");
    var removeClasses = $("#removeClass");
    var animatedPopup = $("#qnimate");
    var fancyboxImg = $('.fancybox');
    var fancyboxIframe = $('.fancybox-iframe');
    var comingSoonTimer = $('.coming-soon #demo');
    var accordionFAQ = $("#accordion");
    var serviceList = $('.service-list');
    var serviceBrief = $('.service-brief');
    var videoPlayer = $('.video figcaption a');

    serviceList.on('click', function() {		
        var dataId = $(this).attr('data-id');
		serviceList.removeClass('active');
		$(this).addClass('active');
        var newClass = $('.' + dataId);
        if (serviceBrief.hasClass("active")) {
            serviceBrief.removeClass("active");
            newClass.addClass('active');
        }

    });
    /*
    ========================================
    Preloder Setting
    ========================================
    */


    $("#preloader").removeClass("animation").addClass("over");
    $(".pre-overlay").css({
        "height": "0%"
    });



    //========================================
    // Search Popup Setting
    //========================================


    if (searchpopup.length) {
        $(function() {
            addClassess.on('click', function() {
                animatedPopup.addClass('popup-box-on');
            });

            removeClasses.on('click', function() {
                animatedPopup.removeClass('popup-box-on');
            });
        })
    }

    //========================================
    // Image and Video Fancy Box
    //======================================== 



    if (fancyboxImg.length) {
        fancyboxImg.fancybox();
    }
    if (fancyboxIframe.length) {
        fancyboxIframe.fancybox({
            type: "iframe",
            // other API options
        });
    }

    //========================================
    // FAQ Accordion
    //======================================== 

    if (accordionFAQ.length) {
        accordionFAQ.accordion();
    }
    //========================================
    // Comming Soon Timer function Calling
    //======================================== 

    if (comingSoonTimer.length) {
        comingsoonInt();
    }

    //========================================
    // Video Player function Calling
    //======================================== 

    videoPlayer.on('click', function(e) {
        e.preventDefault();
        var newVideo = $(this).attr('href');
        $('.video-player iframe').attr('src', newVideo);
        $('.night-video .video').removeClass('active')
        $(this).parent('figcaption').parent('figure').parent('.video').addClass('active');
    });
    //========================================
    // Owl Carousel functions Calling
    //======================================== 	

    owlCarouselInit();

    //***************************************
    // Map initialization function Calling
    //****************************************
		init();
    
	
});

//***************************************
// Contact Map function
//****************************************  


function init() {
	"use strict";
var googleMap =$('#gmap_canvas')
if (googleMap.length) {

    var mapOptions = {
        zoom: 11,
        scrollwheel: false,
        center: new google.maps.LatLng(-37.81614570000001, 144.95570680000003),
        styles: [{
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 50
            }, {
                "color": "#2d2d2d"
            }, {
                "lightness": 100
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#444444"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#303030"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }]
    };
    var mapElement = document.getElementById('gmap_canvas');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: map.getCenter(),
        animation: google.maps.Animation.BOUNCE,
        icon: 'assets/img/all/icon.png',
        map: map
    });
	
}	
}
google.maps.event.addDomListener(window, 'load', init);

//========================================
// Owl Carousel functions
//======================================== 	

function owlCarouselInit() {

    "use strict";

    var sliderMain = $('.slider');
    var teamSlider = $('#team');
    var musicSlider = $('#music');
    var blogSlider = $('#blog');
    var nightSlider = $('#night-club');
    var nightclubSlider = $('#night');
    var nextNav = '<i class="fa fa-angle-right" aria-hidden="true"></i>';
    var prevNav = '<i class="fa fa-angle-left" aria-hidden="true"></i>';



    if (sliderMain.length) {
        sliderMain.owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            navText: [prevNav, nextNav],
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

    }

    if (teamSlider.length) {
        teamSlider.owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: [prevNav, nextNav],
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });

    }

    if (musicSlider.length) {
        musicSlider.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            autoplay: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        });

    }

    if (blogSlider.length) {
        blogSlider.owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: [prevNav, nextNav],
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 5
                }
            }
        });
    }

    if (nightSlider.length) {
        nightSlider.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            autoplay: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        });
    }

    if (nightclubSlider.length) {
        nightclubSlider.owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

    }



}

//========================================
//Coming Soon Timer functions
//======================================== 
function comingsoonInt() {

    "use strict";

    // /*Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = "<div class='col-md-3 col-sm-3 col-xs-3'><div class='timer'>" + days + "</div><span>days </span></div><div class='col-md-3 col-sm-3 col-xs-3'><div class='timer'>" + hours + "</div><span>hours </span></div><div class='col-md-3 col-sm-3 col-xs-3'><div class='timer'> " +
            minutes + "</div><span>minutes </span></div> <div class='col-md-3 col-sm-3 col-xs-3'><div class='timer'>" + seconds + "</div><span>seconds </span></div> ";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}

/*
 *****************************************************
 *	END OF THE JS 									*
 *	DOCUMENT                       					*
 *****************************************************
 */