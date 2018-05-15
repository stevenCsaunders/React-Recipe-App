import React, { Component, Fragment } from 'react';
import gql from "graphql-tag"

import { client } from './endpoints/Endpoint'
import Nav from '../components/Nav'

export default class extends Component {
  state = {
    name: '',
    description: '',
    ingredients: '',
    instructions: ''
  }

render(){

  const addRecipe = async () => {
     await client.mutate({
      mutation: gql`
          mutation{
              createRecipe(data: {
                  name: "${this.state.name}"
                  description: "${this.state.description}"
                  ingredients: "${this.state.ingredients}"
                  instructions: "${this.state.instructions}"
              }){
                  name
                  description
                  ingredients
                  instructions
              }
          }
      `}).then((result) => { return result.data.createRecipe } );

    await this.setState({
      recipeName: '',
      recipeIngredients: '',
      recipeInstructions: ''
    });
    window.location.reload()
  };

  return(
    <Fragment>
      <Nav />
      <h1>Add New Recipe</h1>

      <div>
        <input type="text" value={ this.state.name } onChange={ (event) => { this.setState({ name: event.target.value }) } } />
        <input type="text" value={ this.state.description } onChange={ (event) => { this.setState({ description: event.target.value }) } } />
        <input type="text" value={ this.state.ingredients } onChange={ (event) => { this.setState({ ingredients: event.target.value }) } } />
        <input type="text" value={ this.state.instructions } onChange={ (event) => { this.setState({ instructions: event.target.value }) } } />

        <br/><br/>
        <button onClick={ addRecipe } >Save Recipe</button>
      </div>
    </Fragment>
  )
}
}
