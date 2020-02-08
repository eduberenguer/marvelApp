import React, { Component } from 'react';
import './App.css';
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red';

import Home from './pages/home/Home'
import Landing from './pages/landing/Landing'
import Item from './pages/item/Item'
import NotFound from './pages/notFound/NotFound'
import Profile from './pages/profile/Profile'

class App extends Component{

  state = {
    name: sessionStorage.getItem('name') || ''
  }

  isLoggedIn = () =>{
    return !!this.state.name
  }

  saveUser = (name, preferences) => {
    this.setState({ name, preferences })
    sessionStorage.setItem('name', name)
    this.props.history.push('/landing')
  }

  logout = () => {
    this.setState({ name: '', preferences: '' })
    sessionStorage.clear()
    this.props.history.push('/')
  }

  render(){
    const redTheme = createMuiTheme({ palette: { primary: red } })
    return (
      <MuiThemeProvider theme={redTheme}>
        <Switch>
          <Route exact path='/' render={() => this.isLoggedIn() ? <Redirect to='/landing' /> : <Home saveUser={this.saveUser}/> } />
          <Route exact path='/landing' render={() => !this.isLoggedIn() ? <Redirect to='/' /> : <Landing logout={this.logout}/>} />
          <Route exact path='/item/:id' render={() => this.isLoggedIn() ? <Item /> : <Redirect to="/" />} />
          <Route exact path='/profile' render={() => this.isLoggedIn() ? <Profile /> : <Redirect to="/" />} />
          <Route path='/' render={() => <NotFound />}/> 
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
