function causeNotEquals(expected, actual){
	return "expected \"" + expected + "\" but was \"" + actual + "\"";
}

test( "[test Defined]: Translator ", function() {
	var translator = new Translator();
	ok(translator != null, "Translator not defined!");
});	

test( "[test Defined]: GoogleTranslateUrlBuilder ", function() {
	var urlBuilder = new GoogleTranslateURLBuilder();
	ok(urlBuilder != null, "GoogleUrlBuilder defined!");
});	

test( "[test Output]: GoogleUrlBuilder.buildWithQuery [hello]", function() {
	var target = new GoogleTranslateURLBuilder();
	target.srcLang = LANGUAGE.AUTO;
	target.desLang = LANGUAGE.VIETNAMESE;


	var expected = "http://translate.google.com/translate_a/t?client=webapp&sl=auto&tl=vi&hl=auto&sc=1&q=hello";
	var actual = target.buildWithQuery("hello");

	ok(expected == actual, causeNotEquals(expected, actual));
});	

test( "[test Output]: GoogleUrlBuilder.buildWithQuery [hello world]", function() {
	var target = new GoogleTranslateURLBuilder();
	target.srcLang = LANGUAGE.AUTO;
	target.desLang = LANGUAGE.VIETNAMESE;


	var expected = "http://translate.google.com/translate_a/t?client=webapp&sl=auto&tl=vi&hl=auto&sc=1&q=hello%20world";
	var actual = target.buildWithQuery("hello world");

	ok(expected == actual, causeNotEquals(expected, actual));
});	

test( "[test Output]: GoogleUrlBuilder.buildWithQuery [ありがとう]", function() {
	var target = new GoogleTranslateURLBuilder();
	target.srcLang = LANGUAGE.AUTO;
	target.desLang = LANGUAGE.VIETNAMESE;


	var expected = "http://translate.google.com/translate_a/t?client=webapp&sl=auto&tl=vi&hl=auto&sc=1&q=%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86";
	var actual = target.buildWithQuery("ありがとう");

	ok(expected == actual, causeNotEquals(expected, actual));
});	
