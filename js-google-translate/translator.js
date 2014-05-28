var LANGUAGE = { 
    AUTO: "auto", 
    VIETNAMESE: "vi", 
    ENGLISH: "en" 
}

var AGENT = {
	IPHONE3: "Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18(KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16"
}


function Translator(srcLang, tarLang){
	this.googleTranslatorURL = "https://translate.google.com.vn/#?/?/?";
	this.srcLang = srcLang;
	this.tarLang = tarLang;

	this.translate = function (query){
		if (src == LANGUAGE.ENGLISH)
		return "chao";
	}
}
