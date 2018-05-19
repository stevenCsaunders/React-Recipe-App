import React, { Component } from 'react';
import gql from "graphql-tag"

import { client } from '../endpoints/Endpoint'
import Nav from '../components/Nav'
import BoxItem from '../components/recipebox/BoxItem'


export default class extends Component{
  state = {
    recipes: []
  }

  render(){

    const loadRecipes = async () => {
      let temp1 = await client.query({
        query: gql`
            query {
                recipes {
                    id
                    name
                    description
                    ingredients
                    instructions
                }
            }
        `}).then((result) => { return result.data.recipes } )

      await this.setState({
        recipes: temp1
      })
    }



    return(
      <div>
        <Nav />
        <h1>Read Recipes from DataBase</h1>
        <br/><br/>
        {this.state.recipes[0] ? this.state.recipes.map((info) => { return <BoxItem key={info.id} data={info} /> }) : <div>{window.onload = loadRecipes}</div>}
          </div>
    )
  }
}