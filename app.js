$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
        }
        if(this.scrollY>500){
            $('.scroll-up-btn').addClass('show');
        }else{
            $('.scroll-up-btn').removeClass('show');
        }
    });

// slide_up script
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
});



// typing script
var typed = new Typed(".typing",{
    strings:["Front-End Developer","Web Designer","Freelancer"],
    typeSpeed:80,
    backSpeed:70,
    loop:true
});
var typed = new Typed(".typing-2",{
    strings:["Front-End Developer","Web Designer","Freelancer"],
    typeSpeed:80,
    backSpeed:70,
    loop:true
});


   // toogle menu script
$('.menu-btn').click(function(){
$('.navbar .menu').toggleClass('active');
$('.menu-btn i').toggleClass('active');
});


   // owl carousel script
   $('.carousel').owlCarousel({
margin:20,
loop:true,
autoplayTimeOut:2000,
autoplayHoverPause:true,
responsive:{
    0:{
        items:1,
        nav:false
    },
    700:{
        items:2,
        nav:false
    },
    1000:{
        items: 3,
        nav:false
    }
}

   });

})