
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Navbar from './Navbar';
import blue from 'material-ui/'



export default class extends Component{
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
  }
  render(){
    const toggleMenu = () => {
      this.setState(() => ({open: (!this.state.open)}))
    };
    return(
      <div>
        <AppBar
          style={{backgroundColor: blue500}}
          title="Recipe Box"
          onLeftIconButtonClick = {toggleMenu}
        />

        <Navbar open={this.state.open}
                change={toggleMenu}/>
      </div>
    );
  }

}