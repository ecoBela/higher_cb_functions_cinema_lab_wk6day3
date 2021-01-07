const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.add = function (film) {
  this.films.push(film);
};

Cinema.prototype.filmTitles = function(){
  // titles = []
  const result = this.films.map((film) =>{
    return film.title;

  });
  return result;
}

Cinema.prototype.findByTitle = function(filmTitle){

  return this.films.filter((film) => {
    return film.title === filmTitle;
     
   })
    // return this.films.find( (film) => {
    // return film.title === filmTitle;
//   });
  
 }

Cinema.prototype.findByGenre = function(filmGenre){
  return this.films.filter((film) => {
    return film.genre === filmGenre;
  })
};

module.exports = Cinema;
