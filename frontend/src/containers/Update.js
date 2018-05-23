import React, { Component, Fragment } from 'react';
import gql from "graphql-tag"

import { client } from '../endpoints/Endpoint'
import Nav from '../components/Nav'

export default class extends Component {
  state = {
    id: '',
    name: '',
    description: '',
    ingredients: '',
    instructions: ''
  }


  async componentDidMount(){
    const MyToken = this.props.match.params.id
    console.log('This is my token $: ', MyToken)

    let temp1 = await client.query({
      query: gql`
          query{
              recipe(where: { id: "${this.props.match.params.id}" }){
                  id
                  name
                  ingredients
                  description
                  instructions
              }
          }
      `}).then((result) => { return result.data.recipe } )

    await this.setState({
      name: temp1.name,
      description: temp1.description,
      ingredients: temp1.ingredients,
      instructions: temp1.instructions,
      id: temp1.id
    })
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


    const removeRecipe = async () => {
      await client.mutate({
        mutation: gql`
            mutation{
                deleteRecipe(where: {id: "${this.state.id}"}
                ){
                    id
                    name
                    description
                    ingredients
                    instructions
                }
            }
        `}).then((result) => { return result.data.createRecipe } );

      await this.setState({
        id: '',

      });
      window.location.href = ('/recipebox')
    };


    return(
      <Fragment>
        <Nav />
        <h1>Update Recipe by ID</h1>

       <br/>

        <div>Provide Updated Info for this Singer:</div>
        <input type="text" value={ this.state.name } onChange={ (e) => { this.setState({ name: e.target.value }) } } />
        <input type="text" value={ this.state.description } onChange={ (e) => { this.setState({ description: e.target.value }) } } />
        <input type="text" value={ this.state.ingredients } onChange={ (e) => { this.setState({ ingredients: e.target.value }) } } />
        <input type="text" value={ this.state.instructions } onChange={ (e) => { this.setState({ instructions: e.target.value }) } } />


        <br/>
          <button onClick={ updateRecipe } >Update Recipe</button>
          <button onClick={ removeRecipe } >Delete Recipe</button>

      </Fragment>
    )
  }
}
