
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Navbar from './Navbar';



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
          title="Recipe Box"
          onLeftIconButtonClick = {toggleMenu}
        />

        <Navbar open={this.state.open}
                change={toggleMenu}/>
      </div>
    );
  }

}