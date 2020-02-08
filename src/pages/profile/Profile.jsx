import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import './profile.css'
import TexField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';


const Profile = (props) => {
    const [newName, setNewName] = useState('')

    const saveChanges = (e) => {
        e.preventDefault()
        sessionStorage.setItem('name', newName)
        props.history.push('/landing')
    }

    return (
        <div className="container-profile">
            <Link to={'/landing'}>Return</Link>
            <h1>Profile</h1>
            <form onSubmit={saveChanges}>
                <h3>Change Name</h3>
                <TexField type="text" name="newName" placeholder='New name...' onChange={(e) => setNewName(e.target.value)}/>
                <Button variant="contained" color='primary'>Save</Button>
            </form>
        </div>
    )
}

export default withRouter(Profile)