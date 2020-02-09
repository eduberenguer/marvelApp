import React, { useState, useEffect, Suspense } from 'react'
import { withRouter } from 'react-router-dom'

const Photocard = React.lazy(() => import('../photoCard/Photocard'));

const Items = (props) => {
    const [characters, setCharacter] = useState(props.characters)
    const [notResults, setNotResults] = useState(props.notResults)

    useEffect(()=> {
        setCharacter(props.characters)
        setNotResults(props.notResults)
    },[props.characters || props.notResults])

    return(
        <div className="container-items">
            <Suspense fallback={<p className='loading'>Loading...</p>}>
            {
                characters 
                    ? characters.map(character => <Photocard key={character.id} {...character}/>)
                    : <p>{notResults}</p>
            }
            </Suspense>
        </div>
    )
}

export default withRouter(Items)