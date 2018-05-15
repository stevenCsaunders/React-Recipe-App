import React, { Component, Fragment } from 'react';

import Nav from '../components/Nav'

export default class extends Component{
  render(){
    return(
      <Fragment>
        <Nav />
        <div>
          <h1>Recipe Page</h1>
          <h2>Recipe Image</h2>
          <h2>Ingredients</h2>
          <h2>Instructions</h2>
          <h2>Tags</h2>
        </div>
      </Fragment>
    )
  }
}