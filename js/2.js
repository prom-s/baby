function change(){
	consignee_phone_left.value=""
	consignee_phone_middle.value=""
	consignee_phone_right.value=""
}
var bcchange=document.getElementsByClassName("list")

function bcchange1(){
	var bcchange1=document.getElementById("bcchange1")
	var name_div_error=document.getElementById("name_div_error")
	
	if(bcchange1.value==""){
		console.log(3)
		bcchange[0].style.background="#FFE8E8"
		name_div_error.style.display="block"
		
		return false
	}else{
		bcchange[0].style.background="none"
		name_div_error.style.display="none"
		return true
	}
	
}

function bcchange3(){
	var bcchange3=document.getElementById("bcchange3")
	var address_div_error=document.getElementById("address_div_error")
	if(bcchange3.value==""){
		console.log(3)
		bcchange[2].style.background="#FFE8E8"
		address_div_error.style.display="block"
		return false
	}else{
		bcchange[2].style.background="none"
		address_div_error.style.display="none"
		return true
	}
	
}


function bcchange4(){
	var bcchange4=document.getElementById("bcchange4")
	var call_div_error=document.getElementById("call_div_error")
	console.log(66666)
	var reg =/^1[3|5|8]\d{9}$/;
	if(reg.test(bcchange4.value)==false){
		console.log(3)
		bcchange[3].style.background="#FFE8E8"
		call_div_error.style.display="block"
		return false
	}else{
		console.log(4)
		bcchange[3].style.background="none"
		call_div_error.style.display="none"
		return true
	}
	
}


function confirm(){
	console.log(222)
	
	var consignee_province=document.getElementById("consignee_province")
	var consignee_city=document.getElementById("consignee_city")
	var consignee_countryid=document.getElementById("consignee_countryid")
	 
	var area_div_error=document.getElementById("area_div_error")
	
	if (bcchange1()&&bcchange3()&&bcchange4()) {
		console.log(333)
		if(consignee_province.value == "0" || consignee_city.value=="0" || consignee_countryid=="0"){ 
			console.log(3)
			bcchange[1].style.background="#FFE8E8"
			area_div_error.style.display="block"
			
			return false
		}else {          
			console.log(4)
			bcchange[1].style.background="none"
			area_div_error.style.display="none"
			location.href="index2.html"
			console.log("已添加到用户记录中")
			return true
		}
	} else{
		return false
	}
}
window.onload=function(){

consignee_province.onchange=function(){
	if(consignee_province.value==1000001)
	beijing.style.display="block"
	shanghai.style.display="none"
	if(consignee_province.value==1000009){
	shanghai.style.display="block"
	beijing.style.display="none"
	}
	
}
consignee_city.onchange=function(){
	if(consignee_city.value==1){
	dongchengqu.style.display="block"	
	chaoyangqu.style.display="block"
	huangbuqu.style.display="none"	
	jiadingqu.style.display="none"
	}
	if(consignee_city.value==2){
	huangbuqu.style.display="block"	
	jiadingqu.style.display="block"
	dongchengqu.style.display="none"	
	chaoyangqu.style.display="none"
	}
	
}
}










var n=-1
function xianshi(){
	n++
	var dd=document.getElementById("order-review-tfoot-fl-dd")
	if(n%2==0){
		dd.style.display="block"
	}else{
		dd.style.display="none"
	}

}

var n2=-1
function xianshi2(){
	n2++
	var bpositon=document.getElementById("bpositon")
	var toggle2=document.getElementById("toggle-giftCard-wrap2")
	if(n2%2==0){
		toggle2.style.display="block"
		bpositon.style.backgroundPosition="0 -170px"
	}else{
		toggle2.style.display="none"
		bpositon.style.backgroundPosition="0 -155px"
	}

}
