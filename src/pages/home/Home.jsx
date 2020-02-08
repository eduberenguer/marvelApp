import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './home.css'
import Button from '@material-ui/core/Button';
import TexField from '@material-ui/core/TextField'
import logo from '../../images/logo-home.png'

class Home extends Component{

    state = {
        name: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { name } = this.state
        this.props.saveUser(name)
    }

    render(){
        return(
            <div className="container-home">
                <img src={logo} />
                <form onSubmit={this.onSubmit}>
                    <TexField 
                        label="Your Name"
                        type="text" 
                        name="name" 
                        onChange={this.handleChange}
                    />
                    <Button type="submit" variant="contained" color='primary'>Go!</Button>
                </form>
            </div>
        )
    }
}

export default withRouter(Home)
