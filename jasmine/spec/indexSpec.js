

describe("The Movie ", function() {
	var movie;

	beforeEach(function(){
		movie = new Movie();
		movie.info();
	});

	it("name is Alladin", function(){
		expect(movie).not.toBe(null);
		expect(movie.name).toEqual("Alladin");

	});

	it("info method is defined", function(){
		expect(movie.info).toBeDefined();
	});	

	it("year is 1999", function(){
		expect(movie.year).toEqual(1999);
	});

	it("year is not 2005", function() {
		expect(movie.year).not.toEqual(2005);
	});

	it("persistFavoriteStatus method thrown an exception", function() {
		expect(movie.persistFavoriteStatus).toThrow();
	});

});

describe("The String extension ", function() {
	var str;

	beforeEach(function(){
		str = new String();

		spyOn(str, 'replaceAll');
		
		str.replaceAll(undefined, undefined);
	});

	it("has replaceAll method defined", function(){
		expect(str.replaceAll).toBeDefined();
	});

	it("tracks that the spy was called", function() {
		expect(str.replaceAll).toHaveBeenCalled();
	});

	it("not throws an exception", function(){
		expect(str.replaceAll).not.toThrow();
	});
});



