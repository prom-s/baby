$(function(){
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
	$('#sousuo').focus(function(){
		$(this).attr('placeholder','');
	})
	$('#sousuo').blur(function(){
		if($(this).val()==''){
			$(this).attr('placeholder','搜索 母婴之家 商品/品牌');
		}
	})
	$('#headBox #Boxrt ul #fw').hover(function(){
		$('#headBox #Boxrt #fuwu').css('display','block');
	},function(){
		$('#headBox #Boxrt #fuwu').css('display','none');
	})
	
	
	
	
	$index=0;
	$l=$('#banU li').size();
	var timer=null;
	function star(){
		$('#banU').stop().animate({'left':-1090*$index},1000);
		$('#dian li').eq($index).stop().css({'background':'orangered'}).siblings().css({'background':'#fff'});
	}
	function move(){
		if($index>$l-2){
			$index=-1;
		}
		$index++;
		star();
	}
	timer=setInterval(move,2000);
	$('#banU li').each(function(i){
		$(this).hover(function(){
			clearInterval(timer);
			$index=i;
			star();
		},function(){
			timer=setInterval(move,2000);
		})
	})
	$('#dian li').each(function(i){
		$(this).hover(function(){
			clearInterval(timer);
			$index=i;
			star();
		},function(){
			timer=setInterval(move,2000);
		})
	})
	
	
//广告
	function getScrollTop(){
		var scrollTop=0;
		if(document.documentElement&&document.documentElement.scrollTop){
			scrollTop=document.documentElement.scrollTop;
		}else if(document.body){
			scrollTop=document.body.scrollTop;
		}
		return scrollTop;
	}
	
	
//	$scrolltop=getScrollTop();
	var bol=true;
	$(window).scroll(function(){
		$scrolltop=getScrollTop();
		if($scrolltop>=100){
			$('#lw').css('display','block');	
		}else{
			$('#lw').css('display','none');
		}
		if(bol){
			if($scrolltop>=100){
					$('#gg').css('display','block');
				}else{
					$('#gg').css('display','none');
			}
		}
	})
	$('#gg i').click(function(){
		$('#gg').css('display','none');
		$('#lw').css('top','400px');
		bol=false;
	})
	
	$(window).scroll(function(){
		$scrolltop=getScrollTop();
		if($scrolltop>=500){
			$('#searchbox').css('display','block');
		}else{
			$('#searchbox').css('display','none');
		}
	})
//littlebanner
	timer2=null;
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
		clearInterval(timer2);
	},function(){
		timer2=setInterval(ban1,2000);
	})
	$('#littlebanner span').hover(function(){
		clearInterval(timer2);
	},function(){
		timer2=setInterval(ban1,2000);
	})
	
//当日抢购banner
	timer1=null;
	$d=0;
	$m=$('#bdtop div.rt i').size();
	function ban(){
		if($d>=$m-1){
			$d=-1;
		}
		$d++;
		$('#bdbot ul').animate({'left':-1100*$d},1000);
		if($d==1){
			$('#bdtop div.rt i').eq($d).css('background-position','-194px -53px');
			$('#bdtop div.rt i').eq(0).css('background-position','-165px -83px');
		}else{
			$('#bdtop div.rt i').eq($d).css('background-position','-165px -53px');
			$('#bdtop div.rt i').eq(1).css('background-position','-194px -83px');
		}
		
	}
	
	timer1=setInterval(ban,2000);

	$('#bdtop div.rt i').eq(0).click(function(){
		clearInterval(timer1);
		$(this).css('background-position','-165px -83px');
		$('#bdbot ul').animate({'left':-1100*0},1000);
		timer1=setInterval(ban,2000);
	})
	$('#bdtop div.rt i').eq(1).click(function(){
		clearInterval(timer1);
		$(this).css('background-position','-194px -83px');
		$('#bdbot ul').animate({'left':-1100*1},1000);
		timer1=setInterval(ban,2000);
	})
	
	
	
	
	
	
	
	
	

	$('#bdbot ul li').each(function(i){
		$(this).hover(function(){
			clearInterval(timer1);
			$('#bdbot ul li .zzc').eq(i).css('display','block');
			$('#bdbot ul li .zzc').find('.qg').animate({'top':'0'},100);
		},function(){
			$('#bdbot ul li .zzc').eq(i).css('display','none');
			$('#bdbot ul li .zzc').find('.qg').css('top','20px');
			timer1=setInterval(ban,2000);
		})
	})
	
	
	
	
	
	
	
	
	
//body
	$('#body2 ul li').each(function(i){
		$('#body2 ul li').hover(function(){
			$h=i;
			$(this).eq($h).css('border','1px solid orangered').siblings().css('border','1px solid #ccc');
		},function(){
			$(this).css('border','1px solid #ccc');
		})
	})
	$('#body4 ul li').each(function(i){
		$('#body4 ul li').hover(function(){
			$h=i;
			$(this).eq($h).css('border','1px solid orangered').siblings().css('border','1px solid #ccc');
		},function(){
			$(this).css('border','1px solid #ccc');
		})
	})
	$('#body6 ul li').each(function(i){
		$('#body6 ul li').hover(function(){
			$h=i;
			$(this).eq($h).css('border','1px solid orangered').siblings().css('border','1px solid #ccc');
		},function(){
			$(this).css('border','1px solid #ccc');
		})
	})
	
	
	//fenglei
	$("#nav #fenlei").hover(function(){
		$("#nav #zl").css("display","block");
			$("#nav #zl>li").mouseover(function(){
				$index = $(this).index();
				$(this).find('a').css('color','orangered');
				$(this).siblings().find('a').css('color','#666');
				$("#nav #fl").css("display","block");
				$(this).css({"width":"121px","border":"1px solid #ff5c00","border-right":"none"});
				$(this).siblings().css({"width":"120px","border":"1px solid transparent","border-right":"none"});
				$("#nav #fl>li").eq($index).css("display","block").siblings().css("display","none");
			})
	},function(){
		
		$("#nav #zl").css("display","none");
		$("#nav #fl>li").css("display","none");
		$("#nav #zl>li").css({"width":"120px","border":"1px solid transparent","border-right":"none"});
	})
	

	
	
	
	

	
	
	
	
	
	
	
	
})
