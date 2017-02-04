// Animate Characters Start


// runIt();
function masterAnimate(charImageL, charImageR, fbField) {
    animate1()
    // $('#textUpdate1').hide();
    $('#characterLeft').append(charImageL);
    $('#characterLeft').css("visibility", "hidden");
    // $('#characterLeft').css('z-index', 2000);

    $('#characterRight').append(charImageR);
    $('#characterRight').css("visibility", "hidden");;

    // $('#characterLeft').css('z-index', 3000);
    $('#field-background').show();
    fbField.css({"width":"100%","height":"500px"});
    $('#field-background').append(fbField);
    // $('.field-background').css('z-index', 1000);
    $('body').css("visibility", "visible");
    // $('#showField').addClass('field-background');

    setTimeout(function(){ $("img[data-playerteamnumber='1']").css("visibility", "visible"); }, 1600);

    setTimeout(function(){ $("img[data-playerteamnumber='2']").css("visibility", "visible"); }, 3600);

    function animate1 () {
        var themesong = new Audio('assets/sound/NFL_Theme.mp3');
        themesong.volume = .2;
        themesong.play();

        function ram1(){
        var hit1 = new Audio('assets/sound/Football_Hit_Tackle01.mp3');
        hit1.play();
        }
        setTimeout(ram1, 1000*9);


        function ram2(){
        var hit2 = new Audio('assets/sound/Football_Hit_Tackle14.mp3');
        hit2.play();
        }
        setTimeout(ram2, 1000*14);


        function ram3(){
        var hit3 = new Audio('assets/sound/Football_Hit_Tackle12.mp3');
        hit3.play();
        }
        setTimeout(ram3, 1000*20);


    function runIt1() {
        // $('#textUpdate1').html('Lets go ' + characterImageLeft.data().team + '!!! ');
        // $('#textUpdate1').append(' Lets go ' + characterImageLeft.data().team + '!!!');
        // $('#textUpdate1').addClass('red-text');
        // $('#textUpdate1').show();

        $("#characterLeft")
        .show( "slow" )
        .delay( 9000 )
        // charge right 1
        .animate({ left: "+=200" }, 300 )
        // manual shake
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )

        // slide back left
        .animate({ left: "-=200" }, 1000 )
        .delay( 3000 )

        //charge right 2
        .animate({ left: "+=200" }, 300 )
        //manual shake
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )

        // slide back left
        .animate({ left: "-=200" }, 1000 )
        .delay( 4500 )

        //charge right 3
        .animate({ left: "+=200" }, 300 )
        //manual shake
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )

        // slide back left
        .animate({ left: "-=200" }, 1000 )


        }

    runIt1()


    };



    // Animate Player 2

    animate2()
    function animate2 () {


    // var div2 = $( "#characterRight" );

    function runIt2() {
      $("#characterRight")
        .show( "slow" )
        .delay( 9000 )
        // charge right 1
        .animate({ left: "-=200" }, 300 )
        // manual shake
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )

        // slide back left
        .animate({ left: "+=200" }, 1000 )
        .delay( 3000 )

        //charge right 2
        .animate({ left: "-=200" }, 300 )
        //manual shake
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )

        // slide back left
        .animate({ left: "+=200" }, 1000 )
        .delay( 4500 )

        //charge right 3
        .animate({ left: "-=200" }, 300 )
        //manual shake
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )
        .animate({ left: "+=40" }, 60 )
        .animate({ left: "-=40" }, 60 )

        // slide back left
        .animate({ left: "+=200" }, 1000 )

        }
    runIt2()
    // runIt2()

    };

    // showIt();
};

// Animate Characters End
