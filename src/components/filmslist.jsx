import React, {Component} from "react";


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
    }
  
    export default  FilmsList;