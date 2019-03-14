$(document).ready(function(){
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.fixed-action-btn');
        var instances = M.FloatingActionButton.init(elems, {
            direction: 'left',
            hoverEnabled: false
        });
    });
    $('.modal').modal();
    AOS.init();
    M.AutoInit();
    var prevScrollpos = window.pageYOffset;
    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $('nav').removeClass('black').removeClass('white-text').addClass('transparent').addClass('black-text');
        } else{
            $('nav').removeClass('transparent').addClass('black').removeClass('black-text').addClass('white-text');
        }
        if($(window).scrollTop()>550){
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-70px";
            }
            prevScrollpos = currentScrollPos;
        }
    });
    $('#purple').on('click', function(){
        $('.toggle').toggleClass('purpletext').removeClass('lightblue').removeClass('lightpurple');
        $('a').toggleClass('purpletext').removeClass('lightblue').removeClass('lightpurple');
    });

    $('#lightpurple').on('click', function(){
        $('.toggle').toggleClass('lightpurple').removeClass('lightblue').removeClass('purpletext');
        $('a').toggleClass('lightpurple').removeClass('lightblue').removeClass('purpletext')
    });

    $('#blue').on('click', function(){
        $('.toggle').toggleClass('lightblue').removeClass('lightpurple').removeClass('purpletext');
        $('a').toggleClass('lightblue').removeClass('lightpurple').removeClass('purpletext');
    });
    $('a.btn-floating').addEventListener('mouseover', function(){
        $('a.btn-floating').toggleClass('pulse');
    });
    $('#submit').click(function(){
        var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var varData = 'firstname=' + firstname + 'lastname=' + lastname + 'subject=' + subject + '&email=' + email;
        console.log(varData);

        $.ajax({
            type: 'POST',
            url: 'php.php',
            data: varData,
        })
    })
});


