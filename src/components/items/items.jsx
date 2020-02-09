import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import Photocard from '../photoCard/Photocard'

const Items = (props) => {
    const [characters, setCharacter] = useState(props.characters)
    const [notResults, setNotResults] = useState(props.notResults)

    useEffect(()=> {
        setCharacter(props.characters)
        setNotResults(props.notResults)
    },[props.characters || props.notResults])

    return(
        <div className="container-items">
            {
                characters 
                    ? characters.map(character => <Photocard key={character.id} {...character} />)
                    : <p>{notResults}</p>
            }
        </div>
    )
}

export default withRouter(Items)