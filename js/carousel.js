    $(document).ready(function () {
            // Activate carousel
            $("#myCarousel").carousel();

            // Enable carousel control
            $(".left").click(function () {
                $("#myCarousel").carousel('prev');
            });
            $(".right").click(function () {
                $("#myCarousel").carousel('next');
            });

            // Enable carousel indicators
            $(".slide-one").click(function () {
                $("#myCarousel").carousel(0);
            });
            $(".slide-two").click(function () {
                $("#myCarousel").carousel(1);
            });
            $(".slide-three").click(function () {
                $("#myCarousel").carousel(2);
            });
        });

      //for scrolling
        $('a[href^="#"]').on('click', function (event) {

            var target = $($(this).attr('href'));

            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
            }

        });