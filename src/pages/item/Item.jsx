import React, { useState, useEffect, Suspense } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { FlapperSpinner } from "react-spinners-kit";
import { logic } from "../../logic/index";
import "./item.css";
import Header from "../../components/header/Header";

const Item = props => {
  const [character, setCharacter] = useState("");
  const [item] = useState(props.match.params.id);
  const [loading] = useState(true);

  useEffect(() => {
    logic.retriveCharacterById(item).then(res => {
      if (res) setCharacter(res);
    });
  }, [item]);

  return (
    <div>
      <Header />
      <div className="container-items">
        <Suspense
          fallback={
            <FlapperSpinner
              className="loadingSpinner"
              color="#cb3234"
              size={50}
              loading={loading}
            />
          }
        >
          {character && character.data ? (
            <div className="container-item">
              <h2>{character.data.results[0].name}</h2>
              {character.data.results[0].description ? (
                <p>{character.data.results[0].description}</p>
              ) : (
                <p>This character don´t have description</p>
              )}
              <img
                src={`${character.data.results[0].thumbnail.path}.${character.data.results[0].thumbnail.extension}`}
                alt={character.data.results[0].name}
              />
            </div>
          ) : (
            ""
          )}
        </Suspense>
      </div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.number
};

export default withRouter(Item);
