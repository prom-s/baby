$(function(){
//	------------header---------------
	$phoneb = true;
	$(".phone").hover(function(){
		$(this).find("a").find("u").animate({"background-position-y":"-265px"},100);
		$(this).find(".phonem").css("display","block");
		if ($phoneb) {
			$(".phone").find("a").css({"background":"#fff","border":"1px solid #ff8a00","border-bottom":"none"});
			$phoneb = false;
		}
	},function(){
		$(this).find("a").find("u").animate({"background-position-y":"-240px"},100);
			$(this).find(".phonem").css("display","none");
			if ($phoneb == false) {
				$(".phone").find("a").css({"background":"","border":"1px solid transparent","border-bottom":"none"});
				$phoneb = true;
			}
	})
	$myddb = true;
	$(".mydd").hover(function(){
		$(this).find(".myddm").css("display","block");
		if ($myddb) {
			$(".mydd").find("a").css({"background":"#fff","border":"1px solid #ff8a00","border-bottom":"none"});
			$myddb = false;
		}
	},function(){
		$(this).find(".myddm").css("display","none");
		if ($myddb == false) {
			$(".mydd").find("a").css({"background":"","border":"1px solid transparent","border-bottom":"none"});
			$myddb = true;
		}
	})
	$khfwb = true;
	$(".khfw").hover(function(){
		$(this).find(".khfwm").css("display","block");
		if ($khfwb) {
			$(".khfw").find("a").css({"background":"#fff","border":"1px solid #ff8a00","border-bottom":"none"});
			$khfwb = false;
		}
	},function(){
		$(this).find(".khfwm").css("display","none");
		if ($khfwb == false) {
			$(".khfw").find("a").css({"background":"","border":"1px solid transparent","border-bottom":"none"});
			$khfwb = true;
		}
	})
	
	var timerL=null;
	$k=0;
	$q=$('#littlebanner ul li').size();
	function ban1(){
		if($k>=$q-1){
			$('#littlebanner ul').css('top','0');
			$k=0;
		}
		$k++;
		
		$('#littlebanner ul').animate({'top':-35*$k},1000);
		
	}
	timer2=setInterval(ban1,2000);
	$('#littlebanner ul li').hover(function(){
		clearInterval(timerL);
	},function(){
		timerL=setInterval(ban1,2000);
	})
	$('#littlebanner span').hover(function(){
		clearInterval(timerL);
	},function(){
		timerL=setInterval(ban1,2000);
	})
	
//	***********aside********

	$('#cha').click(function(){
		$('#zhao').css('display','none');
	})
	$('#yh').hover(function(){
		$('#yh p').css('display','block').animate({'right':'52'},100);
	},function(){
		$('#yh p').css({'display':'none','right':'80px'});
	})
	
	$('#aside #asideUL li.uli3').hover(function(){
		$('#aside #asideUL li.uli3 p').css('display','block').animate({'right':'37'},100);
	},function(){
		$('#aside #asideUL li.uli3 p').css({'display':'none','right':'80px'});
	})
	
	$('#aside #asideUL li.uli4').hover(function(){
		$('#aside #asideUL li.uli4 p').css('display','block').animate({'right':'37'},100);
	},function(){
		$('#aside #asideUL li.uli4 p').css({'display':'none','right':'60px'});
	})
	$('#aside #asideUL li.uli5').click(function(){
		$('html,body').animate({'scrollTop':'0'},600);
	})
//	*******section********
	$(".nav_left1").hover(function(){
		$(".nav_left1m").find(".nav_left1m1").css("display","block");
			$(".nav_left1m1>li").mouseover(function(){
				$(".nav_left1m1").css("box-shadow","none");
				$index = $(this).index();
				$(this).find("a").css({"width":"124px","border":"1px solid #ff5c00","border-right":"none"});
				$(this).siblings().find("a").css({"width":"123px","border":"1px solid transparent","border-right":"none"});
				$(".nav_left1m2>li").eq($index).css("display","block").siblings().css("display","none");
			})
	},function(){
		$(".nav_left1m").find(".nav_left1m1").css("display","none");
		$(".nav_left1m2>li").css("display","none");
		$(".nav_left1m1>li").find("a").css({"width":"123px","border":"1px solid transparent","border-right":"none"});
	})
	$("#sec_left2>ul>li").mouseover(function(){
		$(this).css("height","92px").find(".sec_left2mz").css("display","none").prev().css("display","block");
		$(this).siblings().css("height","30px").find(".sec_left2mm").css("display","none").next().css("display","block");
	})
	$bol = true;
		$(".sec_right1m1b").click(function(){
			if($bol){
				$(".sec_right1m1").css("height","197px");
				$(".sec_right1m1b").css("background-position","0px -25px");
				$("#sec_right1").css("height","505px");
				$bol = false;
			}else{
				$(".sec_right1m1").css("height","48px");
				$(".sec_right1m1b").css("background-position","0px 0px");
				$("#sec_right1").css("height","365px");
				$bol = true;
			}
		})
		$(".sec_right1m2b").click(function(){
			if($bol){
				$(".sec_right1m2").css("height","65px");
				$(".sec_right1m2b").css("background-position","0px -25px");
				$("#sec_right1").css("height","375px");
				$bol = false;
			}else{
				$(".sec_right1m2").css("height","55px");
				$(".sec_right1m2b").css("background-position","0px 0px");
				$("#sec_right1").css("height","365px");
				$bol = true;
			}
		})
	
	
})
