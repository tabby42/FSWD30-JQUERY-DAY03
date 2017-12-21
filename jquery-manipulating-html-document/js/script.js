$(document).ready(function() {
	var products = $(".prod-info-main");
	$.each(products, function( index, value ) {
		if ($(this).attr("data-cat") === "phone") {
			$(this).addClass("green");
		} else if ($(this).attr("data-cat") === "tablet") {
			$(this).addClass("blue");
		}  else if ($(this).attr("data-cat") === "laptop") {
			$(this).addClass("red");
		}
	});

	var cloned = $(".prod-info-main:eq(0)").clone();
	console.log(cloned);
	cloned.attr("data-cat", "phone");
	cloned.find("h5 a:first-child").text("NEW phone");
	var newDiv = $("<div class='col-xs-12 col-md-6'></div>");
	newDiv.append(cloned);
	$(".container").append(newDiv);

});