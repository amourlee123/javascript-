/*参考W3Cfuns*/
function browserRedirect(){
	var sUserAgent = navigator.userAgent.toLowerCase();

	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsPhoneos = sUserAgent.match(/phone os/i) == "phone os";
	var bIsMidp = sUserAgent.match(/bIsMidp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "window mobile";
	
	if(bIsAndroid){
		console.log("android");
	}
	else if(bIsIpad){
		console.log("ipad");
	}
	else if(bIsPhoneos || bIsMipd || bIsUc7 || bIsUc || bIsCE || bIsWM){
		console.log("iphone");
	}
	else {
		console.log("pc");
	}
}
