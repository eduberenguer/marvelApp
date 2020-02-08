import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';

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
                characters ? characters.map(character => {
                    return <Card key={character.id} className="item" >
                            <h2>{character.name}</h2>
                            <Link to={`/item/${character.id}`}>
                                <img 
                                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                    alt={character.name}
                                />
                            </Link>
                        </Card>
                        }) : <p>{notResults}</p>
            }
        </div>
    )
}

export default withRouter(Items)