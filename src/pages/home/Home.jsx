import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './home.css'
import Button from '@material-ui/core/Button';
import TexField from '@material-ui/core/TextField'
import logo from '../../images/logo-home.png'

class Home extends Component{

    state = {
        name: '',
        emptyName: ''
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
        if(name){
            this.setState({emptyName: ''})
            this.props.saveUser(name)
        }
        this.setState({emptyName: 'Please, write your name'})
    }

    render(){
        const { name, emptyName } = this.state
        return(
            <div className="container-home">
                <img src={logo} alt='logo'/>
                <form onSubmit={this.onSubmit}>
                    <TexField 
                        label="Your Name"
                        type="text" 
                        name="name" 
                        onChange={this.handleChange}
                    />
                    <Button type="submit" variant="contained" color='primary'>Go!</Button>
                </form>
            {!name ? <p className='emptyError'>{emptyName}</p> : ''}
            </div>
        )
    }
}

export default withRouter(Home)
