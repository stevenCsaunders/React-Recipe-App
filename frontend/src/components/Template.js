import React, { Component } from 'react';

export default class extends Component {
  render() {
    const info = this.props.data
    return (
      <div className="templateCont">
        <div><strong>Name: </strong>{info.name}</div>
        <div><strong>Description: </strong>{info.description}</div>
        <div><strong>Ingredients: </strong>{info.ingredients}</div>
        <div><strong>Instructions: </strong>{info.instructions}</div>
        <div><strong>Id: </strong>{info.id}</div>
      </div>
    )
  }
}