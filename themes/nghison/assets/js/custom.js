$(document).ready(function() {
	var owl = $('.slideshow-wrapper');
	owl.owlCarousel({
		margin: 0,
		nav: true,
		loop: true,
		autoHeight:true,
		autoplay:true,
	    autoplayTimeout:3000,
	    items: 1,
	    dots: false
	});
	var owlPost = $('.slideshow-post');
	owlPost.owlCarousel({
		margin: 0,
		nav: false,
		loop: true,
		autoHeight:true,
		autoplay:false,
	    autoplayTimeout:3000,
	    items: 5,
	    dots: false
	});
	var owlAbout = $('.slideshow-about');
	owlAbout.owlCarousel({
		margin: 0,
		nav: false,
		loop: true,
		autoHeight:true,
		autoplay:true,
	    autoplayTimeout:3000,
	    items: 1,
		dots: true,
		ddotsEach: true
	});
	var owlAbout = $('.slideshow-danb');
	owlAbout.owlCarousel({
		margin: 0,
		nav: false,
		loop: true,
		autoHeight:true,
		autoplay:false,
	    autoplayTimeout:3000,
	    items: 1,
		dots: true,
		ddotsEach: true
	});
	$('.play').on('click',function(){
	    owl.trigger('play.owl.autoplay',[3000])
	})
	$('.stop').on('click',function(){
	    owl.trigger('stop.owl.autoplay')
	})

	$(".mobile-menu-action").click(function(){
		if($(".main-menu").hasClass('active')){
			$(".main-menu").removeClass('active');
			$(".mass-bg").removeClass('active');
		}else{
			$(".main-menu").addClass('active');
			$(".mass-bg").addClass('active');
		}
	});
	if($( window ).width() > 450 ){
		var ul_h = 0;
		$(".list-home-content-item").each(function(){
			if(ul_h < $(this).find('ul').height()){
				ul_h = $(this).find('ul').height();
			}
		});
		$(".list-home-content-item").find('ul').height(ul_h);
	}

	$(".ha-tang-home-item a").click(function(){
		$(".home-hatang-content").addClass('active');
		$(".home-hatang-content-item").removeClass('active');
		$($(this).attr('href')).addClass('active');
		return false;
	});

	if($( window ).width() > 450 ){
		$(".list-home-content-5 .ha-tang-row-content").each(function(){
			$(".home-hatang-content .container").append($(this).html());
			$(this).html('');
		});
	}
})
$(document).click(function(event) { 
  var $target = $(event.target);
  if(!$target.closest('.main-menu').length) {
    $(".main-menu").removeClass('active');
    $(".mass-bg").removeClass('active');
  }        
});