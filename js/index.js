!function () {
	// var b = document.documentElement.clientHeight;
	// var c = document.documentElement.scrollHeight;
	// var d = document.documentElement.scrollWidth;
	$('.scroll').on("click",function (a) {
		a.preventDefault();
		$("html,body").animate({scrollTop:$(this.hash).offset().top},1000);
	});
	var b = document.documentElement.clientHeight;
	// $("#page1").css("height",b);

	// var leader = 0 , target = 0;
	// $(".scroll").click(function () {
	// 	a.preventDefault();
	//
	// });
	// setInterval(function () {
	// 	leader = leader + (target - leader)/10;
	//
	// },30);
}();
