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
			//target img classes that have side filter class
			if ($(this).hasClass(chosenFilter)) {
				//add "chosen" to selected images
				$(this).addClass('chosen');
				$(this).removeClass('hide');
			}
			if ($(this).hasClass('chosen')) {
				// if you have "chosen" class, unhide 
				$(this).removeClass('hide');
			} else {
				$(this).addClass('hide');
			}
		});
		//displays active state and close icon
		$('.close').click(function(e) {
			e.stopPropagation();
			//removes icon when clicking icon
			$(this).removeClass('fa fa-times');
			// removes clicked state when clicking X icon
			$(this).parent().removeClass("side-filter-item_selected");
			//targets the filter where X is located
			var parent = $(this).parent().attr('id');
			
            //loops thru images 
			$('img').each(function() {
				var imgHidden = $('.hide').get().length;
				//if you are the chosen filter and arent the only one visible
				if ($(this).hasClass(parent)) {
					//remove chosen class
					$(this).removeClass('chosen');
					//and hide 	
					$(this).addClass('hide')
				}
				if($('.chosen').length == 0){
                     $('img').removeClass('hide');

				}
			             
			});
		});
	});


       
        
  
});