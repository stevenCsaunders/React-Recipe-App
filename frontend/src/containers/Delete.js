import React, { Component, Fragment } from 'react';
import gql from "graphql-tag"

import { client } from './endpoints/Endpoint'
import Nav from '../components/Nav'

export default class extends Component {
  state = {
    id: '',
  }

  render(){

    const removeRecipe = async () => {
      let temp1 = await client.mutate({
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

      await console.log("User Deleted: ", temp1 )
      await this.setState({
        id: '',

      });
      window.location.reload()
    };

    return(
      <Fragment>
        <Nav />
        <h1>Update Recipe by ID</h1>

        <div>Provide ID of recipe to Delete:</div>
        <input type="text" value={ this.state.id } onChange={ (e) => { this.setState({ id: e.target.value }) } } />
        <br/><br/>


        <br/>
        <button onClick={ removeRecipe } >Delete Recipe</button>
      </Fragment>
    )
  }
}
