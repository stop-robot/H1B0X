
var numMainBannerTimeID = 0;

function funShowMainBanner(numID){
	var ns					= (navigator.appName == "Netscape");
	var objMainBannerPic	= document.getElementById("tdMainBannerPic").getElementsByTagName("div");
	var objMainBannerPage	= document.getElementById("trMainBannerPage").getElementsByTagName("td");
	if (!isNaN(numID)){
		for (intI = 0; intI < objMainBannerPic.length; intI++){
			objMainBannerPic[intI].style.display = "none";
			if (ns) {
				objMainBannerPage[intI].setAttribute("class","index_main_banner_page_td");
			} else {
				objMainBannerPage[intI].className = "index_main_banner_page_td";
			}
		}
		for (intI = 0; intI < objMainBannerPic.length; intI++){
			if(numID==intI){
				objMainBannerPic[intI].style.display = "";
				if (ns) {
					objMainBannerPage[intI].setAttribute("class","index_main_banner_page_current");
				} else {
					objMainBannerPage[intI].className = "index_main_banner_page_current";
				}
			}
			
		}
	}
	clearInterval(numMainBannerTimeID);
	numMainBannerTimeID = setInterval("RotatorMainBanner()",5000);
}
function RotatorMainBanner(){
	var ns					= (navigator.appName == "Netscape");
	var objMainBannerPic	= document.getElementById("tdMainBannerPic").getElementsByTagName("div");
	if (objMainBannerPic != null){
		if (!isNaN(objMainBannerPic.length)){
			for (intI = 0; intI < objMainBannerPic.length; intI++){
				if (objMainBannerPic[intI].style.display==""){
					intNextID = intI + 1;
					if (intNextID >= objMainBannerPic.length){
						intNextID = 0;
					}
					funShowMainBanner(intNextID);
					break;
				}
			}
		}
	}
}


function funShowNews(numID){
	var objNewsDiv	= document.getElementById("divNews").getElementsByTagName("div");
	for (intI = 0; intI < 5; intI++){
		if (numID==intI){
			objNewsDiv[intI].style.display = "";
		} else {
			objNewsDiv[intI].style.display = "none";
		}
		
	}
}

function pigcatFCValidate_reg_form(fc){
	nameForm=fc; 
	if(fc['domain_0'].value==''){
	alert('您所要申請的網域名稱尚未輸入！');
	fc.domain_0.focus();
	flashing(fc.name, 'domain_0',0,10,0);
	return false;
	}
	if(!(fc['domain_0'].value.length>=2 && fc['domain_0'].value.length<=64)){
	alert('網域名稱長度必須介於2至64個字元之間！');
	fc.domain_0.focus();
	flashing(fc.name, 'domain_0',0,10,0);
	return false;
	}
	var myregexp = new RegExp("^[A-Za-z0-9-]+$");
	var match = myregexp.exec(fc['domain_0'].value);
	if(match==null){
	alert('網域名稱只能是數字,英文字母及\'-\'符號,其他的符號或特殊字元都不能使用！');
	fc.domain_0.focus();
	flashing(fc.name, 'domain_0',0,10,0);
	return false;
	}
	var myregexp = new RegExp("^[A-Za-z0-9]");
	var match = myregexp.exec(fc['domain_0'].value);
	if(match==null){
	alert('網域名稱第一個字元必須為英文字母或數字！');
	fc.domain_0.focus();
	flashing(fc.name, 'domain_0',0,10,0);
	return false;
	}
	var myregexp = new RegExp("[A-Za-z0-9]$");
	var match = myregexp.exec(fc['domain_0'].value);
	if(match==null){
	alert('網域名稱最後一個字元必須為英文字母或數字！');
	fc.domain_0.focus();
	flashing(fc.name, 'domain_0',0,10,0);
	return false;
	}
	submitOnce(reg_form);
}

tpsFlashing=100;
		
function setColorError(nameForm,name,colorError) {
	setColorBG(nameForm, name, colorError)
}
		 
function setColorBG(nameForm, name, color) {
 	form=getForm(nameForm);
 	eval(form+'.'+name+'.style.background="'+color+'"')
}
		 
function flashing(nameForm,name,c,nbre,indexC) {
 	form=getForm(nameForm);
 	eval(form+'.'+name+'.style.background=('+c+')?"'+colorFlashing2+'":"'+colorFlashing+'"');
 	c=1-c
 	indexC++
 
 	if(indexC>nbre) {
 		if(keepColor) setColorError(nameForm,name,colorFlashing2)
 		return
 	}
 	setTimeout("flashing('"+nameForm+"', '"+name+"',"+c+","+nbre+","+indexC+")",tpsFlashing)
 }
		 
 function getForm(nameForm) {
 	var ns4=(document.layers)? true:false;
 	var ns6=(document.getElementById)? true:false;
 	var ie4=(document.all)? true:false;
 	if (ns4) {
 		return 'document.layers['+nameForm+']';
 	}
 	if (ie4) {
 		return 'document.'+nameForm;
 	}
 	return 'document.getElementById("'+nameForm+'")';
 }
		 
keepColor=1;
colorFlashing="#FFFFFF"
colorFlashing2="#DC0C11"

 function submitOnce(theform) {
	 if (document.all || document.getElementById) {
		for (i = 0; i < theform.length; i++) {
		var tempobj = theform.elements[i];
		if (tempobj.type.toLowerCase() == 'submit' || tempobj.type.toLowerCase() == 'reset')
			tempobj.disabled = true;
		}
		return true;
	} else {
		return false;
	}
}