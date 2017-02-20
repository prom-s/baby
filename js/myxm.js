$(function(){
	$("#inp").focus(function(){
		$(this).attr("placeholder","");
	})
	$("#inp").blur(function(){
		$(this).attr("placeholder","搜索 母婴之家 商品/品牌");
	})
	$("#logo_rt").hover(function(){
		$(".gwc").css("display","block");
	},function(){
		$(".gwc").css("display","none");
	})
//----- nav 直邮专区   ------	
    $("#list2").hover(function(){
    	$("#list2 .zyzq").css("display","block");
    },function(){
    	$("#list2 .zyzq").css("display","none");
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
//------- nav 右边  ---------- 
    $("#nav_rt").animate({top:0},600)
//分享
    $(".list1").mouseover(function(){
    	$(".list1 .fenxiang").css("display","block");
    	$(".list1 .fenxiang li").hover(function(){
    		$(this).css({"background":"#F3F3F3","border":"1px solid #EEEEEE"});
    		$(this).siblings().css({"background":"#fff","border":"1px solid transparent"});
//  		$("p").css("background","#F6F6F6");
    	}),
    	function(){
    		$(this).css({"background":"#fff","border":"1px solid #transparent"});
    		$(this).next().css({"background":"#F3F3F3","border":"1px solid #EEEEEE"});
    	}
     })
    $(".list1").mouseout(function(){
    	$(".list1 .fenxiang").css("display","none");
    })
    $(".p2").hover(function(){
    	$(".p2 strong").css({"background":"#EFF1F0","border":"#E8E8E8"});
    	
    },function(){
    	$(".p2 strong").css({"background":"#fff","border":"transparent"});
    })
//  放大镜
	var oBanner_lf_top = document.getElementById("banner_lf_top");
	var oBanner_sox = document.getElementById("banner_sox");
	var oBanner_b = document.getElementById("banner_B");
	oBanner_lf_top.onmouseover = function(e){
		var e = e || event;
		var oLeft = oBanner_lf_top.offsetLeft;
		var oTop = oBanner_lf_top.offsetTop;
		var oSt = document.body.scrollTop;
		oBanner_sox.style.display = 'block';
		oBanner_b.style.display = 'block';
		oBanner_sox.style.left = e.clientX - oLeft - oBanner_sox.offsetWidth/2 +'px';
		oBanner_sox.style.top = e.clientY + oSt - oTop - oBanner_sox.offsetHeight/2 +'px';
		oBanner_lf_top.onmousemove = function(e){
			var e = e || event;
			var oSt = document.body.scrollTop;
			oBanner_sox.style.left = e.clientX - oLeft - oBanner_sox.offsetWidth/2 +'px';
			oBanner_sox.style.top = e.clientY + oSt - oTop - oBanner_sox.offsetHeight/2 +'px';
			if (oBanner_sox.offsetLeft<=0) {
				oBanner_sox.style.left = 0;
			}
			if (oBanner_sox.offsetTop<=0) {
				oBanner_sox.style.top = 0;
			}
			if (oBanner_sox.offsetLeft>=oBanner_lf_top.offsetWidth-oBanner_sox.offsetWidth) {
				oBanner_sox.style.left = oBanner_lf_top.offsetWidth-oBanner_sox.offsetWidth + 'px';
			}
			if (oBanner_sox.offsetTop>=oBanner_lf_top.offsetHeight-oBanner_sox.offsetHeight) {
				oBanner_sox.style.top = oBanner_lf_top.offsetHeight-oBanner_sox.offsetHeight+'px';
			}
			oBanner_b.style.backgroundPosition = -oBanner_sox.offsetLeft*(7/4) + 'px ' + -oBanner_sox.offsetTop*(7/4)+'px';
		}
	}
	oBanner_lf_top.onmouseout = function(){
		oBanner_sox.style.display = 'none';
		oBanner_b.style.display = 'none';
	}
	var oTp = document.getElementsByClassName('tp')[0];
	var oLi = oTp.getElementsByTagName('li');
	for (var i = 0; i < oLi.length; i ++) {
		oLi[i].onmouseover = function(){
			var str1 = this.children[0].children[0].src;
			str1 = str1.slice(0,-4);
			oBanner_lf_top.style.backgroundImage = 'url('+ str1+'m.jpg)';
			oBanner_b.style.backgroundImage =  'url('+ str1+'b.jpg)';
		}
	}
// 展开
    $(".banner_md_top div .sq>a").click(function(){
    	$("#huangoukuang").css("display","none");
    	$(".banner_md_top div .sq1").css("display","block");
    	$(".banner_md_top div .sq>a").css("display","none");
    })
    $(".banner_md_top div .sq1>a").click(function(){
    	$("#huangoukuang").css("display","block");
    	$(".banner_md_top div .sq1").css("display","none");
    	$(".banner_md_top div .sq>a").css("display","block");
    })
//  换购
    $("huangoukuang_sp li img").each(function(i){
    	$(this).hover(function(){
    	   $index = i;
    	   $("#huangoukuang_sp_zzc li").eq($index).addClass('zzc').siblings().removeClass('zzc');
    },function(){
    	
    })
   })
    
    
//   $(".sppl li").each(function(i){
//  	$(this).click(function(){
//			
//			$(".sppl li").eq($index).addClass('list1').siblings().removeClass('list1');
//  })
// })
    
//	$("#huangoukuang_sp li img").each(function(i){
//  	$(this).hover(function(){
//			$index = i;
//			$index++;
//			$("#huangoukuang_sp_zzc li").eq($index).css('display',"block").siblings().css('display',"none");
//  }),function(){
//  	    
//  }
// })
//  $("#huangoukuang_sp li img").hover(function(){
//  	$("#huangoukuang_sp_zzc li").css('display',"block").siblings().css('display',"none");
//  },function(){
//  	
//  })
//  $("huangoukuang_sp li").hover(function(){
//  	 $("huangoukuang_sp li").each(function(){
//  	 	$(this).animate({"top":"-20px"},300);
//  	 	$(this).sibling().css("display","none");
//  	 })
//  },function(){
//  		
//  })


//1 
    $n=1;
    $n1=$("#banner_tp11 .list1 strong").html();
    $("#banner_tp11 .list1 b").click(function(){
    	if ($n==1) {
    		$("#banner_tp11 .list1 strong").attr("disabled","disabled");
    		$("#banner_tp11 .list1 strong").html($n);
    	} else{
    		$n--;
    		$("#banner_tp11 .list1 strong").html($n);
    	}
    })
    $("#banner_tp11 .list1 span").click(function(){
    	$n++;
    	$("#banner_tp11 .list1 strong").html($n);
    })
//购物车
    $("#banner_tp11 .list2").hover(function(){
    	$("#banner_tp11 .list2").css("background-position-x","-150px");
    },function(){
    	$("#banner_tp11 .list2").css("background-position-x","0px");
    })
    $("#banner_tp11 .list2").click(function(){
    	alert("加入成功！去结算")
    })

//商品评价条（固定定位）

	$(window).scroll(function(){
	    if($("body").scrollTop()>=840){
	    	$("#main_top_top1").css("display","block");
	    	$("#main_rt_lf").css("display","none");
	    }else{
	    	$("#main_top_top1").css("display","none");
	    	$("#main_rt_lf").css("display","block");
	    }
	})
	
	$("#main_top_top1 .main_rt_lf .list1").click(function(){
		$("#main_bottom_spjs").css("display","block");
		$("#sppj").css("display","block");
		$("#main_sppl").css("display","block");
		$("#main_zx").css("display","block");
	})
	$("#main_top_top1 .main_rt_lf .list2").click(function(){
		$("#main_bottom_spjs").css("display","none");
		$("#sppj").css("display","block");
		$("#main_sppl").css("display","block");
		$("#main_zx").css("display","block");
	})
	$("#main_top_top1 .main_rt_lf .list3").click(function(){
		$("#main_bottom_spjs").css("display","none");
		$("#sppj").css("display","none");
		$("#main_sppl").css("display","block");
		$("#main_zx").css("display","block");
	})
	$("#main_top_top1 .main_rt_lf .list4").click(function(){
		$("#main_bottom_spjs").css("display","none");
		$("#sppj").css("display","none");
		$("#main_sppl").css("display","none");
		$("#main_zx").css("display","block");
	})


//商品介绍
    $("#main_top_top s").hover(function(){
    	$(this).css("background-position-x","-150px");
    },function(){
    	$(this).css("background-position-x","0px");
    })
    $(".main_rt_lf li").each(function(i){
    	$(this).click(function(){
			$index = i;
			$(".main_rt_lf li").eq($index).addClass('list1').siblings().removeClass('list1');
    })
   })
    
// 商品评价

    $(".sppl li").each(function(i){
    	$(this).click(function(){
			$index = i;
			$(".sppl li").eq($index).addClass('list1').siblings().removeClass('list1');
//			$("#main_sppl_bottom1").css("display","block");
			
    })
   })
    $("#main_top_top .main_rt_lf .list1").click(function(){
		$("#main_bottom_spjs").css("display","block");
		$("#sppj").css("display","block");
		$("#main_sppl").css("display","block");
		$("#main_zx").css("display","block");
		$("#main_ppzl").css("display","block");
	})
	$("#main_top_top .main_rt_lf .list2").click(function(){
		$("#main_bottom_spjs").css("display","none");
		$("#sppj").css("display","block");
		$("#main_sppl").css("display","block");
		$("#main_zx").css("display","block");
		$("#main_ppzl").css("display","block");
	})
	$("#main_top_top .main_rt_lf .list3").click(function(){
		$("#main_bottom_spjs").css("display","none");
		$("#sppj").css("display","none");
		$("#main_sppl").css("display","none");
		$("#main_zx").css("display","block");
		$("#main_ppzl").css("display","block");
	})
	$("#main_top_top .main_rt_lf  .list4").click(function(){
		$("#main_bottom_spjs").css("display","none");
		$("#sppj").css("display","none");
		$("#main_sppl").css("display","none");
		$("#main_zx").css("display","none");
		$("#main_ppzl").css("display","block");
	})
	
//全部好评：
	
	$(".sppl .list1").click(function(){
		$("#main_sppl_bottom").css("display","block");
		$("#main_sppl_bottom1").css("display","none");
	})
	$(".sppl .list2").click(function(){
		$("#main_sppl_bottom").css("display","none");
		$("#main_sppl_bottom1").css("display","block");
	})
	$(".sppl .list3").click(function(){
		$("#main_sppl_bottom").css("display","block");
		$("#main_sppl_bottom1").css("display","none");
	})
	$(".sppl .list4").click(function(){
		$("#main_sppl_bottom").css("display","none");
		$("#main_sppl_bottom1").css("display","block");
	})
	
	
	
	
	
	
	
//商品咨询
//	$("#main_zx_top li").each(function(i){
//  	$(this).click(function(){
//			$index = i;
//			$("#main_zx_top li").eq($index).addClass('list1').siblings().removeClass('list1');
//			
//  })
// 
	$("#main_zx_top .zx11 li").each(function(i){
    	$(this).click(function(){
			$index = i;
			$("#main_zx_top .zx11 li").eq($index).addClass('list1').siblings().removeClass('list1');
    	})
	})

})
