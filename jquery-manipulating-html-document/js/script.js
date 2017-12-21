class Product {
	constructor (name, cat, price, description, tag, imageUrl) {
		this.name = name;
		this. cat = cat;
		this.price = price;
		this.description = description;
		this.tag = tag;
		this.imageUrl = imageUrl;
	}
}

var product1 = new Product("MacBook", "laptop", 199, "A Short product description here", "hot", "notebook_apple.png");

var productList = {
	product1
}
console.log(productList);

$(document).ready(function() {
	var categories = ["Phone", "Tablet", "Laptop"];
	//add classes acoording to product category 
	//and insert category name
	var products = $(".prod-info-main");
	$.each(products, function( index, value ) {
		if ($(this).attr("data-cat") === "phone") {
			$(this).addClass("green");
			$(this).find(".cat-phone").text(categories[0]);
		} else if ($(this).attr("data-cat") === "tablet") {
			$(this).addClass("blue");
			$(this).find(".cat-tablet").text(categories[1]);
		}  else if ($(this).attr("data-cat") === "laptop") {
			$(this).addClass("red");
			$(this).find(".cat-laptop").text(categories[2]);
		}
	});

	//clone product and append it
	var cloned = $(".prod-info-main:eq(2)").clone();
	//cloned.attr("data-cat", "phone");
	//cloned.find("h5 a:first-child").text("NEW phone");
	var newDiv = $("<div class='col-xs-12 col-md-6'></div>");
	newDiv.append(cloned);
	$(".container").append(newDiv);

	//filter products
	$(document).on('change','#prod-filter select',function(){
		//get selected option
		var selected = $( "#prod-filter select" ).val();
        //hide all products that don't belong to the selected category
        $.each($(".prod-info-main"), function( index, value ) {
			$(this).show();
        	if (selected === "all") {
				$(this).show();
        	} else if ($(this).attr("data-cat") !== selected) {
				$(this).hide();
			} 
		});
  	});

});