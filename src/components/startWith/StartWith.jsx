import React, { useState } from 'react'
import { withRouter } from 'react-router'
import Button from '@material-ui/core/Button';
import TexField from '@material-ui/core/TextField'
import './startWith.css'

const StartWith = (props) => {
    const [startWithValue, setStartWithValue] = useState('')

    const searchStartWith = (e) => {
        e.preventDefault()
        startWithValue ? props.searchStartWith(startWithValue) : props.searchStartWith()
    }

    const resetStartWith = (e) => {
        e.preventDefault()
        setStartWithValue('')
        props.searchStartWith()
    }

    return(
        <div className="container-startWith">
            <form onSubmit={(e) => searchStartWith(e)}>
                <h4>Inteligent findes. Write a initial letter:</h4>
                <TexField 
                    type='text' 
                    label='Inteligent search...' 
                    value={startWithValue} 
                    className="container-input-startWith"
                    onChange={(e) => setStartWithValue(e.target.value)}/>
                <Button type='submit' variant="contained" color="primary">Search!</Button>
                <Button onClick={(e) => resetStartWith(e)} variant="contained" color="primary">Reset</Button>
            </form>
            
        </div>
    )
}

export default withRouter(StartWith)