$(function() {
	$("body").niceScroll({
		cursorcolor: "#000",
		cursoropacitymax: 1,
		touchbehavior: !1,
		cursorwidth: "8px",
		cursorborder: "0",
		cursorborderradius: "8px"
	});
	validate.init();
});
var validate = (function() {
	return {
		flag: true,
		init: function() {
			$('input:visible').focusout(function(event) {
				//不为空
				if (!$(this).val()) {
					$(this).parent().tooltip({
						"title": "输入的内容不能为空"
					}).tooltip("show");
					this.flag = false;
					return;
				}
				//长短
				var max = $(this).parent().attr('max') ? $(this).parent().attr('max') : 99999;
				var min = $(this).parent().attr('min') ? $(this).parent().attr('min') : 0;
				if (max < $(this).val().length || min > $(this).val().length) {
					$(this).parent().tooltip({
						"title": "输入字符应为" + min + "~" + max + "个字符"
					}).tooltip("show");
					this.flag = false;
					return;
				}
				//正则
				if ($(this).parent().attr('reg')) {
					var reg = new RegExp($(this).parent().attr('reg'), "g");
					if (!$(this).val().match(reg)) {
						$(this).parent().tooltip({
							"title": "您输入的内容不合法"
						}).tooltip('show');
						this.flag = false;
						return;
					}
				}
			}).focusin(function(event) {
				$(this).parent().tooltip("destroy");
				this.flag = true;
			});
			var _this = this;
			$("form").submit(function(event) {
				if (_this.flag) {
					$('input').focusout();
					if ($(".tooltip").length > 0) {
						return false;
					} else {
						$("input[type=submit]").val("正在提交...");
						_this.flag = false;
					}
				} else {
					return false;
				};
			});
		}
	}
})();