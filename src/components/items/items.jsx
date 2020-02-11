import React, { useState, useEffect, Suspense } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const Photocard = React.lazy(() => import("../photoCard/Photocard"));

const Items = props => {
  const { characters } = props;
  const { notResults } = props;

  const [dataCharacters, setDataCharacter] = useState(characters);
  const [notResult, setNotResult] = useState(notResults);

  useEffect(() => {
    setDataCharacter(characters);
    setNotResult(notResults);
  }, [characters || notResult]);

  return (
    <div className="container-items">
      <Suspense fallback={<p className="loading">Loading...</p>}>
        {dataCharacters ? (
          dataCharacters.map(character => (
            <Photocard key={character.id} {...character} />
          ))
        ) : (
          <p>{notResult}</p>
        )}
      </Suspense>
    </div>
  );
};

Items.propTypes = {
  characters: PropTypes.array,
  notResults: PropTypes.string
};

export default withRouter(Items);
