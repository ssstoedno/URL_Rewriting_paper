$(function(){
	var menuOffSet=$('nav').offset();
	
	$(document).on('scroll',function(){
		var scrollTop=$(document).scrollTop();
		
		if(scrollTop>menuOffSet.top){
			$('nav').addClass('fixed');
		}else{
			$('nav').removeClass('fixed');
		}
	});
	
	var beginningOffSet=$('h').offset().top;
	var part1OffSetTop=$('.main>section:nth-child(1)').offset().top;
	var part2OffSetTop=$('.main>section:nth-child(2)').offset().top;
	var part3OffSetTop=$('.main>section:nth-child(3)').offset().top;
	var part4OffSetTop=$('.main>section:nth-child(4)').offset().top;
	var part5OffSetTop=$('.main>section:nth-child(5)').offset().top;
	var part6OffSetTop=$('.main>section:nth-child(6)').offset().top;
	var part7OffSetTop=$('.main>section:nth-child(7)').offset().top;
	var part8OffSetTop=$('.main>section:nth-child(8)').offset().top;
	var part9OffSetTop=$('.main>section:nth-child(9)').offset().top;
	var part10OffSetTop=$('.main>section:nth-child(10)').offset().top;
	
	$(document).on('scroll',function(){
		var scrollTop=$(document).scrollTop();
		var activeLink;
		
		if(scrollTop<part1OffSetTop-30){
			activeLink=$('.menu>li:nth-child(1)');
		}
		else if(scrollTop<part2OffSetTop-30){
			activeLink=$('.menu>li:nth-child(2)');
		}
		else if(scrollTop<part3OffSetTop-30){
			activeLink=$('.menu>li:nth-child(3)');
		}
		else if(scrollTop<part4OffSetTop-30){
			activeLink=$('.menu>li:nth-child(4)');
		}
		else if(scrollTop<part5OffSetTop-30){
			activeLink=$('.menu>li:nth-child(5)');	
		}
		else if(scrollTop<part6OffSetTop-30){
			activeLink=$('.menu>li:nth-child(6)');	
		}
		else if(scrollTop<part7OffSetTop-30){
			activeLink=$('.menu>li:nth-child(7)');	
		}
		else if(scrollTop<part8OffSetTop-30){
			activeLink=$('.menu>li:nth-child(8)');	
		}
		else if(scrollTop<part9OffSetTop-30){
			activeLink=$('.menu>li:nth-child(9)');	
		}
		else if(scrollTop<part10OffSetTop-30){
			activeLink=$('.menu>li:nth-child(10)');	
		}
		else{
			activeLink=$('.menu>li:nth-child(11)');
		}
		activeLink.addClass('active');
		$('.menu>li').not(activeLink).removeClass('active');
	});
	
});