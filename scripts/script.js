//for masonry
var container = document.querySelector('#masonry');
var masonry = new Masonry(container, {
	columnWidth: 5,
	itemSelector: '.item'
});
//Sidefilter logic
$(document).ready(function() {
	$(".sidefilter-item").on("click", function() {
		//adds background to side filter items when clicked
		$(this).addClass("side-filter-item_selected");
		// adds an icon to the side filter item selected
		$(this).find('.close').addClass("fa fa-times");
		var chosenFilter = $(this).attr('id');
		//loop thru images and hide elements that do not share the chosenFilter name
		
        
        
        $('img').each(function() {
			//target classes that have side filter class
			if ($(this).hasClass(chosenFilter)) {
				$(this).addClass('chosen');
			}
			if ($(this).hasClass('chosen')) {
				$(this).removeClass('hide');
			} 
            else {
				$(this).addClass('hide');
			}
		});
		//displays active state and close icon
		$('.close').click(function(e) {
			e.stopPropagation();
			//removes icon when clicking icon
			$(this).removeClass('fa fa-times');
			// removes clicked state when clicking icon
			$(this).parent().removeClass("side-filter-item_selected");
			var parent = $(this).parent().attr('id');
			
            $('img').each(function() {
				if ($(this).hasClass(parent)) {
					$(this).removeClass('chosen');
					$(this).addClass('hide');
				}
              
			
			});
		});
		
	});
});