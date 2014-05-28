test( "translator return chao when translate hello", function() {
	var translator = new Translator("en", "vi");
	var query = "hello";

	var expect = "chao";
	var actual = translator.translate(query);

	equal(actual, expect , "Dich sai");
});	