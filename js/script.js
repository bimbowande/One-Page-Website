
/*
* @author
*Oluwagbuyi Abimbola Olawande
*Chief Developer/Chief Technical Officer, Memmour
*oluwagbuyiabimbola@memmour.com,bimbowande@gmail.com, oluwagbuyi01@yahoo.com
*Saturday, November 24 2016 : 12:58am
*
*/
$(function(){
		$('a[href="#service"]').click(function() {
			var fooOffset = $('#services').offset(),
			destination = fooOffset.top;
			$(document).scrollTop(destination);
	});
})


var currentIndex = 0,
  items = $('#home .display'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('#home .display').eq(currentIndex);
  items.hide();
  item.css('display','block');
	$('.intro-text').addClass('animated zoomIn');
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 10000);