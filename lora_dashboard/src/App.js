import React from 'react'; //standard import
import { useState } from 'react'; //allows you to use useState hooks (basically you can define states in a funciton without making it a class)
import PropTypes from "prop-types"; //standard import
import 'bootstrap/dist/css/bootstrap.min.css';  //bootstrap library
import Button from 'react-bootstrap/Button';    //buttons in bootstrap library
import ToggleButton from 'react-bootstrap/ToggleButton' //ToggleButton in bootstrap library
import ButtonGroup from 'react-bootstrap/ButtonGroup' //buttonGroup in bootstrap library
import SideNav from './Layouts/SideNav.js';     //SideNav file
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"; //NA

  

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      buttonSensorListPressed: false,
      buttonGraphPressed: false,
      sideNavOpen: false,
    };
  }


	render()	{
    const { classes, ...rest } = this.props;

    return (
      
      <div style={{position: 'absolute', width: '100%', height: '100%', background: 'white'}}> {/* background */}
        <div style={{position: 'absolute', width:'100%',height:'90px',background:'lightblue',display:'flex', alignItems: 'center'}}> {/* top naivigation bar */}
          <Button variant= {this.state.buttonSensorListPressed ? "primary":"outline-primary"} onClick={() => this.buttonSensorListPressed()} style={{marginLeft: '20px'}}>SENSOR LIST</Button>{' '} {/*Button style imported*/}
          <ToggleButtonExample></ToggleButtonExample>
        </div>
        <div style={{position: 'fixed',width: 'calc(100% + 135px)',left: this.state.sideNavOpen ? '0px' : '-135px',transition: 'all 0.3s ease',top:'90px',background:'white',height:'calc(100% - 90px)'}}> {/*content container*/}
          {/*Stick content here*/}
          <SideNav></SideNav>
        </div>
      </div>
    )
  }

  buttonSensorListPressed = () =>{ {/* Function that runs when onClick happens*/}
    this.setState({buttonSensorListPressed: !this.state.buttonSensorListPressed});
    this.setState({sideNavOpen: !this.state.sideNavOpen});
  }

  buttonGraphPressed = () =>{ {/* Function that runs when onClick happens*/}
    this.setState({buttonGraphPressed: !this.state.buttonGraphPressed});
  }


}

function ToggleButtonExample() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'VIEW 1', value: '1' },
    { name: 'VIEW 2', value: '2' },
    { name: 'VIEW 3', value: '3' },
    { name: 'VIEW 4', value: '4'},
  ];

  return (
    <>
      <ButtonGroup toggle style={{marginLeft: '100px'}}>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            variant="outline-primary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            style = {{display: 'flex', alignItems: 'center'}}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default App;
