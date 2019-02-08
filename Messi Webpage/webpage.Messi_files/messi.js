// This is making my jumbotron fade out when scrolling.


$(window).scroll(function(){
    $(".jumbotron").css("opacity", 1 - $(window).scrollTop() / 250);
  });
