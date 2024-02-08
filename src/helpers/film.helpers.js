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
  
function getFilmStats(list)
  {
    let movieObj = {avg_score:0,
      acc_score:0,
      total:0,
      latest:1900
      }  
//  console.log(list);
  if (list.length > 0)
     {
 
    let newestYear = 1900;
    let totalRating = 0;
    
    for (let vint = 0; vint < list.length; vint++)  
      {
      totalRating += Number(list[vint].rt_score);
      if (newestYear < list[vint].release_date) {newestYear = list[vint].release_date}
      }

  movieObj.acc_score = totalRating;
  movieObj.total = list.length;
  movieObj.avg_score = Number(movieObj.acc_score) / Number(movieObj.total);
  movieObj.latest = newestYear;
 // console.log(movieObj);
 }
  return movieObj
  }

export {filterFilmsByDirector, getListOf, getFilmStats};