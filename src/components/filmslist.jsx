import { useState, useEffect } from "react";

export default function FilmsList(props) {
  let [listNew, setList] = useState([]);
  useEffect(() => {
    getFilms([]);
  }, []);

  function getFilms() {
    console.log("Get Films now");
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setList(data);
      })
      .catch(console.error);
  }

  return (
    <ul>
      {listNew.map((film) => {
        return <li key={film.id}>{film.title}</li>;
      })}
    </ul>
  );
}

//class version
/*
    class FilmsList extends React.Component{
      constructor(props)
          {    
              super(props)
              this.state = 
                  {
                  list: []
                  }
          }
  
      getFilms(){
          console.log("Get Films now");
          fetch(`https://studioghibliapi-d6fc8.web.app/films`)
          .then((response) => {
                             console.log(response);
                             return response.json()
                            })
             .then((data) => {console.log(data);
                              this.setState({list: data})})
          .catch(console.error);
       }
  
       componentDidMount(){this.getFilms()}
  
       render() {
          return (
          <ul>
          {this.state.list.map(element => {
            return <li key={element.id}>{element.title}</li>
            })}
          </ul>
          )
        }        
      }*/
