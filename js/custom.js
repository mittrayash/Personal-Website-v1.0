/* ========================================================================= */
/*	Preloader
/* ========================================================================= */




$(document).ready(function(){

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */



    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $("#navigation").css("background-color","#fff");
			$("header").css("box-shadow","0px 0px 6px #222");
			$("a").css("color","#222");
			$(".navbar-brand").css("color","#222");
			$(".navbar-toggle i").css("color","#222");
			$(".navbar-collapse").css("background-color","#fff");


        } else {
            $("#navigation").css("background-color","transparent");
			$("header").css("box-shadow","0px 0px 0px #fff");
			$("a").css("color","#fff");
			$(".navbar-brand").css("color","#fff");
			$(".navbar-toggle i").css("color","#fff");
			$(".navbar-collapse").css("background-color","#000");
			$(".blacker").css("color","black", 'important');
        }
    });

	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */



	/* ========================================================================= */
	/*	Portfolio Filtering
	/* ========================================================================= */


    // portfolio filtering



	/* ========================================================================= */
	/*	Parallax
	/* ========================================================================= */



	/* ========================================================================= */
	/*	Timer count
	/* ========================================================================= */

	/* ========================================================================= */
	/*	Back to Top
	/* ========================================================================= */


    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#back-top").fadeIn(200)
        } else {
            $("#back-top").fadeOut(200)
        }
    });
    $("#back-top").click(function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    });

});


// ==========  START GOOGLE MAP ========== //
function initialize() {
    var myLatLng = new google.maps.LatLng(22.402789, 91.822156);

    var mapOptions = {
        zoom: 14,
        center: myLatLng,
        disableDefaultUI: true,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
        }
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);


    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: 'img/location-icon.png',
        title: '',
    });

}

google.maps.event.addDomListener(window, "load", initialize);
// ========== END GOOGLE MAP ========== //