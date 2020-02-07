import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { logic } from '../../../src/logic/index'

const Landing = (props) => {
    const [name, setName] = useState(sessionStorage.getItem('name'))
    const [preferences, setPreferences] = useState(sessionStorage.getItem('preferences'))
    const [comics, setComics] = useState('')
    const [characters, setCharacters] = useState('')

    useEffect(() => {
        if(preferences == 'option1'){
            logic.retrieveCharacters()
            .then((res) => {
                setCharacters(res)
            })
        }
        if(preferences == 'option2'){
            logic.retriveComics()
            .then((res) => {
                setComics(res)
            })
        }
        
    }, [name])

    return(
        <div>
            Landing
            <button onClick={props.logout}>Logout</button>
            <Link to={'/profile'}>Profile</Link>
            <h1>{name}</h1>
            {
                characters ? <p>characters</p> : ''
            }
            {
                comics ? <p>comics</p> : ''
            }
        </div>
    )
}

export default withRouter(Landing)