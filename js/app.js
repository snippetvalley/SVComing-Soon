$(document).ready(function(){
	var dteNow = new Date();
	var intYear = dteNow.getFullYear();
	 

      $('#counter-block').countdown('2018/01/01', function(event) {
        var $this = $(this).html(event.strftime(''
    /*+ '<span>%w <em>weeks </em></span> '*/
    + '<span>%D <em>days </em></span> '
    + '<span>%H <em>hrs </em></span> '
    + '<span>%M <em>mins</em></span>  '
    + '<span>%S <em>secs</em></span> '));
      });
    /* Setting Code */ 
	$('[data-toggle="popover"]').popover({
			placement : 'right',
			trigger : 'click',
			html : true,
			title:'Change Image',
			content : $("#setting-content").html()
		});
		$("body").on("click",".width50 .img-responsive",function(){
			var bgSrc = $(this).attr('src');
			bgSrc = bgSrc.replace("_tn","").replace("thumbnails","bg");
			$("html").css('background-image', 'url(' + bgSrc + ')');
	});
	/* End of Setting Code */ 
});
