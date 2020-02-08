import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'
import { logic } from '../../logic/index'
import { Link } from 'react-router-dom'


const Item = (props) => {
    const [character, setCharacter] = useState('')
    const [item, setItem] = useState(props.match.params.id)

    useEffect(() => {
        logic.retriveCharacterById(item)
            .then(res => {
                if(res) setCharacter(res)
            })
    }, [item])

    return(
        <div>
            <Link to={'/landing'}>Return</Link>
            {
                character.data ? <div>
                                <h2>{character.data.results[0].name}</h2>
                                {character.data.results[0].description 
                                    ? <p>{character.data.results[0].description}</p> 
                                    : <p>This character don´t have description</p>}
                                <img src={`${character.data.results[0].thumbnail.path}.${character.data.results[0].thumbnail.extension}`}/>
                            </div> : ''
            }
        </div>
    )
}

export default withRouter(Item)