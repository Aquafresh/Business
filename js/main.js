		jQuery(document).ready(function() {
		jQuery('.features').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated zoomInUp',
		offset: 100
		});
		});

		jQuery(document).ready(function() {
		jQuery('.steps-block,.top-blocks').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInLeft',
		offset: 100
		});
		});

		jQuery(document).ready(function() {
		jQuery('.steps-reverse-block,.bottom-blocks').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInRight',
		offset: 100
		});
		});

		var open = document.querySelector(".popup-show");
		var form = document.querySelector(".popup-form");
		var close = document.querySelector(".close-popup-form");

		open.addEventListener("click", function(event) {
		event.preventDefault();
		form.classList.add("popup-form-show");
		});

		close.addEventListener("click", function(event) {
		event.preventDefault();
		form.classList.add("animated");
		form.classList.add("bounceOutDown");
			setTimeout(function(){
			form.classList.remove("popup-form-show");
			},2000)
		});

		$(function() {
		  $('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        return false;
		      }
		    }
		  });
		});