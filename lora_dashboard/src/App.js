import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,

      sideNavOpen: true,
    };
  }

	render()	{
    const { classes, ...rest } = this.props;
    return (
      <div style={{position: 'absolute', width: '100%', height: '100%', background: 'red'}}>
        <div style={{width: '100px' ,height: '100%', background: 'blue' }}></div>

      </div>
    )
  }

}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default App;
