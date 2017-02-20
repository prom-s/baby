	$(function(){
		$width1 = $('.contd>ul>li').width();
		$index=0;
		$l = $('.contd>ul>li').size();
		$('#right1').click(function(){
			//alert("111")
			if ($index<$l){
				$index+=3;
				$('.contd>ul').animate({'left':-$width1*$index},1000);
			}
			
		})
		$('#left1').click(function(){
			//alert("222")
		
			if ($index>0){
				$index-=3;
				
				$('.contd>ul').animate({'left':-$width1*$index},1000);
				
			}
			
		})
	})
	

	$(function(){
		$width2 = $('.contd2>ul>li').width();
		$index2=0;
		$l2 = $('.contd2>ul>li').size();
		$('#right2').click(function(){
			//alert("111")
			if ($index2<$l){
				$index2+=4;
				$('.contd2>ul').animate({'left':-$width2*$index2},1000);
			}
			
		})
		$('#left2').click(function(){
			//alert("222")
		
			if ($index2>0){
				$index2-=4;
				
				$('.contd2>ul').animate({'left':-$width2*$index2},1000);
				
			}
			
		})
	})
	

$(function(){
	$('#d1').click(function(){
					//$index=$(this).index()
					$('#d1').addClass('selected').siblings().removeClass('selected');
					$('.contd2 .ul1').removeClass('uln').siblings().addClass('uln');
					//alert("111")
			})
	$('#d2').click(function(){
					//$index=$(this).index()
					$('#d2').addClass('selected').siblings().removeClass('selected');
					$('.contd2 .ul2').removeClass('uln').siblings().addClass('uln');
					//alert("222")
			})
})



$(function(){
	
	var n=1
	var m=39.50
	$("#jian").click(function(){
		console.log(56555)
		n--
		if(n>=0){
			$("#zhi").html(n)
			var a=m*n
			$("#changeprice").html(a)
			$("#changeprice2").html(a)
		}else{
			n=0
		}
		
	})
	$("#jia").click(function(){
		console.log(999)
		n++
		$("#zhi").html(n)
		var a=m*n
		$("#changeprice").html(a)
		$("#changeprice2").html(a)
	})
})
