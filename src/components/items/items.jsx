import React, { useState, useEffect, Suspense } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { FlapperSpinner } from "react-spinners-kit";

const Photocard = React.lazy(() => import("../photoCard/Photocard"));

const Items = props => {
  const { characters, notResults } = props;

  const [dataCharacters, setDataCharacter] = useState(characters);
  const [notResult, setNotResult] = useState(notResults);
  const [loading] = useState(true);

  useEffect(() => {
    setDataCharacter(characters);
    setNotResult(notResults);
  }, [characters || notResult]);

  return (
    <div className="container-items">
      <Suspense
        fallback={
          <FlapperSpinner
            className="loading"
            size={50}
            color="#cb3234"
            loading={loading}
          />
        }
      >
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
