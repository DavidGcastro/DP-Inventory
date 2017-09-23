//for masonry

var container = document.querySelector('#masonry');
  var masonry = new Masonry(container, {
    columnWidth: 5,
    itemSelector: '.item'
  });


//Sidefilter logic
$(document).ready(function(){

$( ".sidefilter-item" ).on( "click", function() {
    $(this).addClass("side-filter-item_selected"); 	
    $(this).find('.close').addClass("fa fa-times"); 
    //add function to sort images
    //adding click adds variable
    //clicking on additional sidefilter items adds items to be filters
});

//$('.sidefilter-item').on("click", '.close', function(){
//    $(this).parent().removeClass('.side-filter-item_selected');
//  
//})

$('.close').click(function(e){
    //function to take elements out of filter
            e.stopPropagation();
            $(this).removeClass('fa fa-times');
            $(this).parent().removeClass("side-filter-item_selected");
                
});


});





	 // var filter = $(this).attr('id');
	 // $("img").addClass('hide');
	 // setTimeout(function(){
  //       $("." + filter).removeClass("hide");
	 // },100);