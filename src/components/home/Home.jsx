import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

class Home extends Component{

    state = {
        name: '',
        preferences: 'option1'
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { name, preferences } = this.state
        this.props.saveUser(name, preferences)
    }

    render(){
        return(
            <div>
                HOME
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="name" placeholder="Please, your name..." onChange={this.handleChange}/>
                    <select name="preferences" onChange={this.handleChange}>
                        <option value="option1">Characters</option>
                        <option value="option2">Comics</option>
                    </select>
                    <button>Send</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Home)
