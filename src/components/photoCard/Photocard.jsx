import React from 'react'
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'

const Photocard = (props) => {
    const [ref] = useInView({threshold: 0})

    return( 
        <div ref={ref}>
            <Card key={props.id} className="item" >
                <h2>{props.name}</h2>
                <Link to={`/item/${props.id}`}>
                    <img 
                        src={`${props.thumbnail.path}.${props.thumbnail.extension}`}
                        alt={props.name}
                    />
                </Link>
            </Card>
        </div>      
    )
}

export default Photocard