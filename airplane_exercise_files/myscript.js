$(document).ready(function(){
  $('html').on("mouseover", "#moveme", move);

  function move () {
  	$('html').on("mousemove", smove);
  }
  //move element with cursor
  function smove (e) {
  	var x = e.pageX;
    var y = e.pageY;   
	//console.log(x, y);
    $('#moveme').css({'top': y - 120}); 
    $('#moveme').css({'left': x - 120});
  }

  $('html').on("click", function(e){
  	//remove mousemove handler on click
  	$(this).off("mousemove", smove);
  	$("#moveme").fadeOut("slow").fadeIn("slow");
  });

});