var LANGUAGE = { 
    AUTO: "auto", 
    VIETNAMESE: "vi", 
    ENGLISH: "en" 
}

var AGENT = {
	IPHONE3: "Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18(KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16"
}

function GoogleTranslateURLBuilder() {
	this.mainURL = "http://translate.google.com/translate_a/t?";
	this.srcLang = "auto";
	this.desLang = "vi";

	this.buildWithQuery = function(query) {
		var url = [];
		var queryEncoded = encodeURIComponent(query);
		url.push(
			"http://translate.google.com/translate_a/t?",
			"client=webapp",
			"&sl=auto",
			"&tl=", this.desLang,
			"&hl=", this.srcLang,
			"&sc=1",
			"&q=", queryEncoded
			);
		
		return url.join("");
	}
}

function Translator(){
	this.srcLang = LANGUAGE.AUTO;
	this.tarLang = LANGUAGE.VIETNAMESE;
	this.translateURL = "http://translate.google.com/translate_a/t?client=t&sl=en&tl=es&hl=en&sc=2&ie=UTF-8&oe=UTF-8&oc=1&otf=1&ssel=0&tsel=0";



	this.translate = function (query){
		var url = this.translateURL + "&q=" + query;


	}
}



function httpGet(url)
{
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            return xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", theUrl, false );
    xmlhttp.send();    
}

function getPage() {
  // the file to be read
  pageURL = new java.net.URL ("http://www.yourserver.com/yoyrpage.html");

  // step 1, open the URL
  var openConnection = pageURL.openConnection;
  theConnection = openConnection()

  // step 2, connect to server
  var t=theConnection.connect
  t()

  // step 3, read the file using HTTP protocol
  var getContent = theConnection.getContent
  var theURLStream = getContent()

  // step 4, get an handle and fetch the content length
  var readStream = theURLStream.read
  var gcl = theConnection.getContentLength
  gcLen = gcl()

  // and finally, read into a variable
  theText =""
  for (i = 1; i <gcLen; i++) {
   theText += new java.lang.Character(readStream())
   }

  // for demonstration
  alert(theText)
}
