import React, {useState, useEffect} from 'react'
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom'
import { InView } from 'react-intersection-observer'

const Photocard = (props) => {
    return( 
        <InView>
            {({ inView, ref, entry }) => (
            <div ref={ref}> 
                { inView && <Card key={props.id} className="item">
                        <h2>{props.name}</h2>
                        <Link to={`/item/${props.id}`}>
                        <img 
                            src={`${props.thumbnail.path}.${props.thumbnail.extension}`}
                            alt={props.name}
                        />
                        </Link>
                    </Card>
                 }
            </div>
            )}
        </InView>
    )
}

export default Photocard