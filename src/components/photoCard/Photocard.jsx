import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";

const Photocard = props => {
  const { id, name } = props;
  const { path, extension } = props.thumbnail;

  return (
    <div>
      {
        <Card key={id} className="item">
          <h2>{name}</h2>
          <Link to={`/item/${id}`}>
            <img src={`${path}.${extension}`} alt={name} />
          </Link>
        </Card>
      }
    </div>
  );
};

Photocard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  path: PropTypes.string,
  extension: PropTypes.string
};

export default Photocard;
