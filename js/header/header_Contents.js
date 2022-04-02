$(document).ready(function() {
    
    // 카테고리 컨트롤
    $('nav .navbar-toggle').on("click", function(){
        if($("nav ul.navbar-change").hasClass("off")){
            $("nav ul.navbar-change").removeClass("off");
            $("nav ul.navbar-change").addClass("on");
            $("nav ul.navbar-change").slideDown();
        } else {    
            $("nav ul.navbar-change").removeClass("on");
            $("nav ul.navbar-change").addClass("off");
            $("nav ul.navbar-change").slideUp();
        };
    });

});

