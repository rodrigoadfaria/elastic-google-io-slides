

/*describe("Hello World",function(){
	it ("says hello", function(){
		expect(helloWorld()).toEqual('Oi');

	});

});*/

describe("Nome do Filme",function(){
	it("e terminator",function(){
		expect(valueSubtitle()).toEqual('Javascript');

	});

});

describe("The Movie ", function(){
	var movie;

	beforeEach(function(){
		movie = new Movie();
		movie.info();

	});

	it("name is Alladin",function(){
		expect(movie.name).toEqual("Alladin");

	});

	it("year is 1999",function(){
		expect(movie.year).toEqual(1999);
	})

});

