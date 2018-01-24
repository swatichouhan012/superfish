jQuery(".search-icon").click(function(){
        jQuery(".form-search").slideToggle("slow");
	});	

jQuery(document).ready(function(){
jQuery(window).scroll(function(){
    if (jQuery(this).scrollTop() > 50) {
       jQuery('.mobile_search').addClass('search_issue');
    } else {
       jQuery('.mobile_search').removeClass('search_issue');
    }
});

jQuery('a span.sf-sub-indicator').bind("click", function (e) {
        e.preventDefault();
  jQuery(this).parents('li.sf-depth-1').find('ul').toggleClass('sf-hidden');
  
    });
/* class for span icon*/
jQuery('.department_sidebar_menu .menu.sf-menu li .sf-sub-indicator').click(function() {
    jQuery(this).toggleClass("open-arrow");
    });
});
