import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';


class SideNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

	render()	{
    const { classes, ...rest } = this.props;
    return (
          <div style={{position: 'absolute', width: '135px', height: '100%', background: 'lightBlue', display: 'flex', flexDirection:'column', alignItems: 'center'}}>
          <Button variant="outline-primary" style={{marginTop:'15px'}}>SENSOR 1</Button>
          <Button variant="outline-primary" style={{marginTop:'15px'}}>SENSOR 2</Button>
          <Button variant="outline-primary" style={{marginTop:'15px'}}>SENSOR 3</Button>
          <Button variant="outline-primary" style={{marginTop:'15px'}}>SENSOR 4</Button>
          <Button variant="outline-primary" style={{marginTop:'15px'}}>SENSOR 5</Button>
          <Button variant="outline-primary" style={{marginTop:'15px'}}>SENSOR 5</Button>
          <Button variant="outline-primary" style={{marginTop:'15px'}}>SENSOR 5</Button>
          <Button variant="outline-primary" style={{marginTop:'15px'}}>SENSOR 5</Button>
          <Button variant="outline-primary" style={{marginTop:'15px'}}>SENSOR 5</Button>
      </div>
    )
  }

}

SideNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default SideNav;