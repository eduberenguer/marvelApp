import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

const NotFound = () => {

    return(
        <div>
            <Link to={'/'}>Return</Link>
            Not Found
        </div>
    )
}

export default withRouter(NotFound)