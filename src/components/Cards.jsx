import React, { Component } from "react";

export default class Card extends Component {
  render() {
    let filmList = this.props.filmList.map(film => {
      return (
        <div
          className="card col-md-5 mx-auto my-2 p-0 justify-content-center"
          key={film.id}
        >
          <div className="card-block">
            <h4 className="card-title">Title: {film.title}</h4>
            <p className="card-text">Description: {film.description}</p>
            <p className="card-text">Director: {film.director}</p>
            </div>
        </div>
      );
    });
    return <div className="row">{filmList}</div>;
  }
}