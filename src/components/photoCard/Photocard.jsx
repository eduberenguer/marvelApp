import React from 'react'
import Card from '@material-ui/core/Card';
import { useNearScreen } from '../../hooks/useNearScreen'
import { Link } from 'react-router-dom'

const Photocard = (props) => {
    const [show, element] = useNearScreen()

    return(
        <div ref={element}>
            { show && <Card key={props.id} className="item">
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
    )
}

export default Photocard