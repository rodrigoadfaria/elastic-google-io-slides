function Movie() {
}


Movie.prototype.info = function() {
	this.name = "Alladin";
	this.year = 1999;
};

Movie.prototype.persistFavoriteStatus = function(value) {
  // something complicated
  throw new Error("not yet implemented");
};

