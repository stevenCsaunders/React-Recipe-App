import React, { Component } from 'react';


export default class extends Component {
  render() {

    return (
      <div>
        <div>
          <div><strong>Name:</strong> {this.props.data.name}</div>
          <div><strong>Description: </strong>{this.props.data.description}</div>
          <div><strong>Ingredients: </strong>{this.props.data.ingredients}</div>
          <div><strong>Instructions: </strong>{this.props.data.instructions}</div>
          <br/>
        </div>
      </div>
    )
  }
}