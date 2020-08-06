import React from 'react';
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

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
      
    )
  }

}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default App;
