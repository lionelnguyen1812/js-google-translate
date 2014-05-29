function causeNotEquals(expected, actual){
	return "expected \"" + expected + "\" but was \"" + actual + "\"";
}

test( "[test Defined]: Translator ", function() {
	var translator = new Translator();
	ok(translator != null, "Translator not defined!");
});	


test( "[test Output]: buildURL with query [hello]", function() {
	var target = new Translator();
	target.srcLang = LANGUAGE.AUTO;
	target.desLang = LANGUAGE.VIETNAMESE;


	var expected = "http://translate.google.com/translate_a/t?client=webapp&sl=auto&tl=vi&hl=auto&sc=1&q=hello";
	var actual = target.buildURL("hello");

	ok(expected == actual, causeNotEquals(expected, actual));
});	

test( "[test Output]: buildURL with query [hello world]", function() {
	var target = new Translator();
	target.srcLang = LANGUAGE.AUTO;
	target.desLang = LANGUAGE.VIETNAMESE;


	var expected = "http://translate.google.com/translate_a/t?client=webapp&sl=auto&tl=vi&hl=auto&sc=1&q=hello%20world";
	var actual = target.buildURL("hello world");

	ok(expected == actual, causeNotEquals(expected, actual));
});	

test( "[test Output]: buildURL with query [ありがとう]", function() {
	var target = new Translator();
	target.srcLang = LANGUAGE.AUTO;
	target.desLang = LANGUAGE.VIETNAMESE;


	var expected = "http://translate.google.com/translate_a/t?client=webapp&sl=auto&tl=vi&hl=auto&sc=1&q=%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86";
	var actual = target.buildURL("ありがとう");

	ok(expected == actual, causeNotEquals(expected, actual));
});	
