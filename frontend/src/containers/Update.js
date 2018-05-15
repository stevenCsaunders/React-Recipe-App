import React, { Component, Fragment } from 'react';
import gql from "graphql-tag"

import { client } from './endpoints/Endpoint'
import Nav from '../components/Nav'

export default class extends Component {
  state = {
    id: '',
    name: '',
    description: '',
    ingredients: '',
    instructions: ''
  }

  render(){

    const updateRecipe = async () => {
      await client.mutate({
        mutation: gql`
            mutation{
                updateRecipe(where: {id: "${this.state.id}"}
                    data: {
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
        <h1>Update Recipe by ID</h1>

        <div>Provide ID of singer to Update:</div>
        <input type="text" value={ this.state.id } onChange={ (e) => { this.setState({ id: e.target.value }) } } />
        <br/><br/>

        <div>Provide Updated Info for this Singer:</div>
        <input type="text" value={ this.state.name } onChange={ (e) => { this.setState({ name: e.target.value }) } } />
        <input type="text" value={ this.state.description } onChange={ (e) => { this.setState({ description: e.target.value }) } } />
        <input type="text" value={ this.state.ingredients } onChange={ (e) => { this.setState({ ingredients: e.target.value }) } } />
        <input type="text" value={ this.state.instructions } onChange={ (e) => { this.setState({ instructions: e.target.value }) } } />


        <br/>
          <button onClick={ updateRecipe } >Update Recipe</button>
      </Fragment>
    )
  }
}
