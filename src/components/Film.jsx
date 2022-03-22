import React, { Component } from "react";

export default class Card extends Component {
  render() {
    let filmList = this.props.filmList.map(film => {
      return (
        <div
          className="card col-md-5 mx-auto my-2 p-0 justify-content-center"
          key={film.id}
        >
          <div className="card">
            <h4 className="card-title">Title: {film.title}</h4>
            <p className="card-text">Description: {film.description}</p>
            <p className="card-text">Release Date: {film.release_date}</p>
            <p className="card-text">Rating: {film.rt_score}</p>
           </div>
           <hr /><hr />
        </div>
      );
    });
    return <div className="row">{filmList}</div>;
  }
}