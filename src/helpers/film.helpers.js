function filterFilmsByDirector(list, oneDirector)
  { 
    let newFilms = list;
    if (oneDirector > "")
      {
       newFilms = newFilms.filter(film => film.director == oneDirector)
      }
    return(newFilms);
  };

function getListOf(list, field)
  {
    let varr = list.map(film => film[field]);
    let varr2 = varr.filter((field, index) => varr.indexOf(field) === index);
    return varr2;
  };
  
export {filterFilmsByDirector, getListOf};