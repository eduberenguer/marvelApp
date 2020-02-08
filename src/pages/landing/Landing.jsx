import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { logic } from '../../logic/index'
import './landing.css'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import Header from '../../components/header/Header'
import SuperHero from '../../components/superHero/SuperHero'
import StartWith from '../../components/startWith/StartWith'

const Landing = (props) => {
    const [name, setName] = useState(sessionStorage.getItem('name'))
    const [characters, setCharacters] = useState('')
    const [startWith, setStartWith] = useState('')
    const [notResults, setNotResults] = useState('')

    useEffect(() => {
        retrieveCharacters()
    }, [startWith])

    const retrieveCharacters = () => {
        logic.retrieveCharacters()
            .then(res => {
                if(res.data.count > 0) setCharacters(res)
                else setNotResults('Upps.. no results')
        })
    }

    const changeOrder = () => {
        logic.changeOrder()
            .then(res => {
                setCharacters(res)
            })
    }

    const searchStartWith = (value) => {
        if(value){
            logic.nameStartWith(value)
            .then(res => {
                if(res.data.count > 0) {
                    setCharacters(res)
                }
                else {
                    setCharacters('')
                    setNotResults('Upps.. no results')
                }
            })
        }else{
            retrieveCharacters()
        }
    }

    return(
        <div>
            <Header logout={props.logout}/>
            <h1 className="name-title">Welcome, {name}</h1>
            <div className="finders">
                <SuperHero />
                <StartWith searchStartWith={searchStartWith}/>
            </div>
            <Button onClick={() => changeOrder()} color='primary'>Change Order</Button>
            <div className="container-items">{
                characters ? characters.data.results.map(character => {
                    return <Card key={character.id} className="item" >
                            <h2>{character.name}</h2>
                            <Link to={`/item/${character.id}`}>
                                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`}/>
                            </Link>
                        </Card>
                }) : <p>{notResults}</p>
            }</div>
        </div>
    )
}

export default withRouter(Landing)