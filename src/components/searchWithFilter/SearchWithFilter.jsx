import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import './searchWithFilter.css'
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

const SearchWithFilter = (props) => {
    const [limit, setLimit] = useState('')
    const [type, setType] = useState('comics')

    const search = (e) => {
        e.preventDefault()
        limit && type ? props.searchFilter(limit, type) : props.searchFilter()
    }

    const resetSearch= (e) => {
        e.preventDefault()
        setLimit('')
        props.searchFilter()
    }

    return(
        <div className="container-searchWithFilter">
            <h4>Select the limit of appearances in a category</h4>
            <form onSubmit={(e) => search(e)}>
                <Typography id="discrete-slider" gutterBottom>
                    Minim of apparences
                </Typography>
                <Slider
                    defaultValue={10}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={5}
                    marks
                    min={0}
                    max={110}
                    className="container-input-searchWithFilter"
                    onChange={(e) => {setLimit(e.target.innerText)}}
                />
                <div>
                    <Select
                        label='Category'
                        id="demo-simple-select"
                        value={type}
                        onChange={(e) => setType(e.target.value)}>
                            <MenuItem value={'comics'}>Comics</MenuItem>
                            <MenuItem value={'series'}>Series</MenuItem>
                            <MenuItem value={'stories'}>Stories</MenuItem>
                    </Select>
                        <Button type='submit' variant="contained" color="primary">Search!</Button>
                        <Button onClick={(e) => resetSearch(e)} variant="contained" color="primary">Reset</Button>
                </div>
            </form>
        </div>
    )

}

export default withRouter(SearchWithFilter)