import React, { Component } from "react";

export default class People extends Component {
  render() {
    let peopleList = this.props.peopleList.map((people, index) => {
      return (
        <div
       className="card col-md-5 mx-auto my-2 p-0 justify-content-center"
          key={index}
        >
          <div className="card-block">
            <h4 className="card-title">Name: {people.name}</h4>
            <p className="card-text">Gender: {people.gender}</p>
            <p className="card-text">Eye Color: {people.eye_color}</p>
            <p className="card-text">Age: {people.age}</p>
            <p className="card-text">Hair Color: {people.hair_color}</p>
            </div>
            <hr /><hr />
           </div>
      );
    });
    return <div className="card">{peopleList}</div>;
  }
}


