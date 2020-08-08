import React from 'react';
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import SideNav from './Layouts/SideNav.js'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      buttonPressed: false,
      sideNavOpen: false,
    };
  }

	render()	{
    const { classes, ...rest } = this.props;

    return (
      
        <div style={{position: 'absolute', width: '100%', height: '100%', background: 'white'}}> {/* background */}
          <div style={{poisition: 'absolute', width:'100%',height:'90px',background:'lightblue',display:'flex', alignItems: 'center'}}> {/* top naivigation bar */}
            <Button variant= {this.state.buttonPressed ? "primary":"outline-primary"} size="lg" onClick={() => this.buttonPressed(), this.sideNavToggle} style={{marginLeft: '10px'}}>
              Primary
              </Button>{' '}
          </div>
          <div style={{position: 'fixed',width: '100%', height:'calc(100%-90px)',left: this.state.sideNavOpen ? '0px' : '-300px',transition: 'all 0.3s ease'}}> {/*content container*/}
            {/*Stick content here*/}
            <SideNav></SideNav>
          </div>
        </div>
      
    )
  }

  buttonPressed = () =>{ {/* Function that runs when onClick happens*/}
    console.log('hello');
    this.setState({buttonPressed: !this.state.buttonPressed});
  }

  sideNavToggle = () =>{
    console.log('yoyoy bitch');
    this.setState({sideNavOpen: !this.state.sideNavOpen});
  }

}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default App;
