import { useState, useEffect } from "react";
import { filterFilmsByDirector, getListOf, getFilmStats } from "../helpers/film.helpers"
import { Link } from "react-router-dom";

function FilmsPage(props) {

  let [listNew, setList] = useState([]);
  let [searchDirector, setSearchDirector] = useState("");

  useEffect(() => { getFilms([])}, []);

  function getFilms() {
//    console.log("Get Films now");
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
      .then((response) => {
//        console.log(response);
        return response.json();
      })
      .then((data) => {
//        console.log(data);
        setList(data);
      })
      .catch(console.error);
  }

  let filmsByDirector = filterFilmsByDirector(listNew, searchDirector);
  //console.log("listNew:", listNew);
  let directors = getListOf(listNew, "director");
  let { avg_score, totalScore, total, latest } = getFilmStats(filmsByDirector);
  return (
    <div>
        <h1>Studio Ghibli Films</h1>
        <form>
            <div className="form-group">
                <label>Choose a director: </label>
                <select id="directorSel" 
                        name="directorSel" 
                        onChange={(e) => setSearchDirector(e.target.value)} 
                        value={searchDirector}>
                        <option value="">All</option>
                        {directors.map((director, index) => { return (
                           <option key={director+index} 
                                   value={director}>{director}</option>)})}
                </select>
            </div>
        </form>
    <div>
      <div>
        <span># Of Films: </span>
        <span>{total}</span>
      </div>
      <div>
        <span>Average Rating: </span>
        <span>{avg_score.toFixed(2)}</span>
      </div>
      <div>
        <span>Latest Film: </span>
        <span>{latest}</span>
      </div>
    </div>
        <ul>
        {filmsByDirector.map(
              (film) => {return <li key={film.id}>
                            <Link to={`film/${film.id}`}>{film.title}</Link>
                            </li>})
              }
    </ul>
    </div>
  );
}

export  {FilmsPage};