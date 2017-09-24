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
		$("img").each(function() {
			var currentImg = this;
            
            //hide img elements that DO NOT have the class of the sidefilter selected
			if ($(currentImg).hasClass(chosenFilter)) {
                $("."+chosenFilter).removeClass('hide');
            	$(this).removeClass('hide');
			}
            else{
				$(this).addClass('hide');
            }
          //remove hide of an image when the appropriate filter has been chosen.
          //trigger masonry
         
		});
        
        $('.close').on('click', function(){
             // chose side filter
             var parent = $(this).parent().attr('id');
             var currentImg = this;
             $('img').each(function(){
                 //target classes that have side filter class
                 if(!$(this).hasClass(parent) && $(this).hasClass("hide") ){
                   //make them appear
                   $(this).removeClass('hide');
                 }
             });

        });
       
      
        
        
	});
        //displays active state and close icon
    	$('.close').click(function(e) {
			e.stopPropagation();
            //removes icon when clicking icon
			$(this).removeClass('fa fa-times');
            // removes clicked state when clicking icon
			$(this).parent().removeClass("side-filter-item_selected");
   
		});
});