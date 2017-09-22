//for masonry

var container = document.querySelector('#masonry');
  var masonry = new Masonry(container, {
    columnWidth: 5,
    itemSelector: '.item'
  });


//Sidefilter logic
$(document).ready(function(){
$( ".sidefilter-item" ).on( "click", function() {
	 var filter = $(this).attr('id');
	  $('.side-filter-item').addClass('.side-filter-item_selected');
	 		




	 $("img").addClass('hide');
	 setTimeout(function(){
        $("." + filter).removeClass("hide");
	 },100);
     
 	

 	
 

});
});
