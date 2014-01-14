$(function() {
	$(".ancor a").click(function() {
		var href = $(this).attr("href");
		var pos = $(href).offset().top;
		$("html,body").animate({
			scrollTop: pos - 130
		}, 500);
		return false;
	});
	$(".domain li a").tooltip().click(function() {
		return false;
	});
	/**
	幻灯片+事件绑定
	**/
	change_banner.init();
	setInterval(function() {
		change_banner.next();
	}, 10000);
	$(".pre,.next").click(function() {
		change_banner.next();
	});
	/**
	tip
	**/
	$(".form-input label").click(function() {
		$(this).hide().prev().focus();
	}).prev().blur(function() {
		if (!$(this).val()) {
			$(this).next().show();
		}
	});
	//滚动条
	$("body").niceScroll({
		cursorcolor: "#000",
		cursoropacitymax: 1,
		touchbehavior: !1,
		cursorwidth: "8px",
		cursorborder: "0",
		cursorborderradius: "8px"
	});
	//customers-logo
	/*setInterval(function() {
		if (!$('.customers-logo img').attr("open")) {
			$('.customers-logo img').attr("open", 1).attr('src', "images/hezuo2.png");
		} else {
			$('.customers-logo img').attr("open", 0).attr('src', "images/hezuo1.png");
		}
	}, 1000);*/
});
var change_banner = (function() {
	return {
		banner_array: [],
		index: 0,
		window_width: 0,
		init: function() {
			this.window_width = $(window).width() + 17;
			this.banner_array = $('.img-warpper').find('.back');
			return this;
		},
		next: function() {
			if (this.index == 2) {
				var a = 0;
				this.index++;
			} else {
				a = ++this.index;
			}
			$(this.banner_array).eq(a).css({
				left: this.window_width
			}).stop().animate({
				left: 0
			}, 800);
			$(this.banner_array).eq(this.index - 1).stop().animate({
				left: -this.window_width
			}, 800);
			if (this.index > this.banner_array.length - 1) {
				this.index = 0;
			}
		}
	}
})();