/**
 *
 * @author Srikanth Subramanian
 *
 * Jquery plugin for replacing lengthy names with ellipsis.
 * Also includes a tooltip functionality which shows the entire text.
 *
 * created on 26 September, 2012.
 *
 * **/

(function($) {
   $(function(){
       var clientHeight = $(window).height();
       $("#headertop").height(clientHeight );
   });
    /*$(window).resize(function() {$(function(){
	    var cWidth=$(window).width();

	    if(cWidth < 880){
			$("#navigation li").css("display","none");
			$("#noimg").css("display","block");
			$("#skills li").removeClass("norclear");
		    $("#skills li").addClass("addclear");
			$("#navigation a").css({"width":"85%"},{"padding-left":"5px"})
			$("#noimg").click(function(){
			   $("#navigation li").toggle(800);
			   $("#navigation li").addClass("addnav");
			  });
			$(function(){
                 var navH = $("#navigation").offset().top;
                 $(window).scroll(function(){
                 $("#navigation li").css("display","none");
                 });
            });
	    }
      });
    });*/
   
       $('.footer .center a').click(function(){
       $('html,body').animate({scrollTop: '0px'}, 1200);});

	   $(function(){
	   $('#no1').click(function(){
	   setTab1("no",1,5); 
       $('html,body').animate({scrollTop: '0px'}, 1200);});
	   $('#no2').click(function(){
	   setTab1("no",2,5);  
       $('html,body').animate({scrollTop:$('#works').offset().top-44}, 1200);});
	   $('#no3').click(function(){
	   setTab1("no",3,5); 
       $('html,body').animate({scrollTop:$('#about').offset().top-44}, 1200);});
	   $('#no4').click(function(){
	   setTab1("no",4,5);  
       $('html,body').animate({scrollTop:$('#contact').offset().top-44}, 1200);});
	   $('#no5').click(function(){
	   setTab1("no",5,5);
       $('html,body').animate({scrollTop:$('#other').offset().top-44}, 1200);});
	 });
	 
	 
       $(function(){
        var navH = $(window).height()*0.7;
	    $(".nav-aside").css("display","none");//"position":"static"
        $(window).scroll(function(){
        var scroH = $(this).scrollTop();
          if(scroH>=navH){
		   $(".nav-aside").show(1000);
        }else if(scroH<navH){$(".nav-aside").hide(600);}
        });
     });

	 

   $(function(){
	      /*var cWidth=$(window).width();
		  if(cWidth < 660){
			$('.nav-aside').css({"width":"80%","height":"80%"})
		  };*/


          var workH=$("#works").offset().top-44;
          var aboutH=$("#about").offset().top-44;
          var contactH=$("#contact").offset().top-44;
		  var otherH=$("#other").offset().top-44;
		  	 $(window).scroll(function(){
			      var scroH = $(this).scrollTop();
				  if(scroH<workH){
				  setTab1("no",1,5);}
				  else if(scroH>=workH&&scroH<aboutH){
				  setTab1("no",2,5);}
                  else if(scroH>=aboutH&&scroH<contactH){
				  setTab1("no",3,5);}
                  else if(scroH>=contactH&&scroH<otherH){
				  setTab1("no",4,5);}
                  else if(scroH>=otherH){
				  setTab1("no",5,5);}
			 });
    });


//$(function(){
//	var lb = $("#works"),
	 /*lnum=$(".inimg li").length;
	 wnum=lnum/12;*/
//		lb_cur = 1,
//		lbp_w = lb.find(".inimg").width();
//		lb_timer = null;
//	    t = 1;
//	function showLimitBuyProducts(){
//		if(lb_cur < 1){
//			lb_cur = 6;
//		} else if(lb_cur > 6){
//			lb_cur = 1;
//		}
		/*var lp=(lb_cur-1)*12;
		for(i=lp+1;i<=lb_cur*12;i++){
		  /* var inimg = $("#works .inimg").css("display","none").animate(1500).eq(lb_cur-1).animate(1500).css("display","block"),*/
//			$(".inimg li").hide();
//			var b=lb_cur-1;
//			$(".nohidden"+b).fadeTo(2000,1).show();
		/*}*/
//	}
//	lb_timer = setInterval(function(){
//		lb_cur++;
//		showLimitBuyProducts();
//	}, 4000);

//	$(".changeimg .prev").click(function(){
//		lb_cur--;
//		showLimitBuyProducts();
//	});
//	$(".changeimg .next").click(function(){
//		lb_cur++;
//		showLimitBuyProducts();
//	});
//	$(".changeimg").hover(function(){
//			clearInterval(lb_timer);
//			lb_timer = null;
//			/*$(".changeimg .prev, .changeimg .next").show();*/
//		}, function(){
//			lb_timer = setInterval(function(){
//				lb_cur++;
//				showLimitBuyProducts();
//			}, 4000);
			/*$(".changeimg .prev, .changeimg .next").hide();*/
//	});
//});

})(jQuery);
