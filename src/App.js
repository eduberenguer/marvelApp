import React, { Component } from 'react';
import './App.css';
import { withRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from '../src/components/home/Home'
import Landing from '../src/components/landing/Landing'
import Item from '../src/components/item/Item'
import NotFound from '../src/components/notFound/NotFound'
import Profile from '../src/components/profile/Profile'

class App extends Component{

  state = {
    name: sessionStorage.getItem('name') || '',
    preferences: sessionStorage.getItem('preferences') || ''
  }

  isLoggedIn = () =>{
    return !!this.state.name
  }

  saveUser = (name, preferences) => {
    this.setState({ name, preferences })
    sessionStorage.setItem('name', name)
    sessionStorage.setItem('preferences', preferences)
    this.props.history.push('/landing')
  }

  logout = () => {
    this.setState({ name: '', preferences: '' })
    sessionStorage.clear()
    this.props.history.push('/')
  }

  render(){
    return (
      <Switch>
        <Route exact path='/' render={() => this.isLoggedIn() ? <Redirect to='/landing' /> : <Home saveUser={this.saveUser}/> } />
        <Route exact path='/landing' render={() => !this.isLoggedIn() ? <Redirect to='/' /> : <Landing logout={this.logout} logout={this.logout}/>} />
        <Route exact path='/item/' render={() => this.isLoggedIn() ? <Item /> : <Redirect to="/" />} />
        <Route exact path='/profile' render={() => this.isLoggedIn() ? <Profile /> : <Redirect to="/" />} />
        <Route path='/' render={() => <NotFound />}/> 
      </Switch>
    );
  }
}

export default withRouter(App);
