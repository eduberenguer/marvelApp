import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

const Profile = () => {
    const [newName, setNewName] = useState('')

    const saveChanges = (e) => {
        e.preventDefault()
        sessionStorage.setItem('name', newName)
    }

    return (
        <div>
            <Link to={'/landing'}>Return</Link>
            PROFILE
            <form onSubmit={saveChanges}>
                <h1>Change Name</h1>
                <input type="text" name="newName" placeholder='New name...' onChange={(e) => setNewName(e.target.value)}/>
                <button>Save</button>
            </form>
        </div>
    )
}

export default withRouter(Profile)