import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { logic } from "../../logic/index";
import "./item.css";
import Header from "../../components/header/Header";

const Item = props => {
  const [character, setCharacter] = useState("");
  const [item] = useState(props.match.params.id);

  useEffect(() => {
    logic.retriveCharacterById(item).then(res => {
      if (res) setCharacter(res);
    });
  }, [item]);

  return (
    <div>
      <Header />
      <div className="container-items">
        {character.data ? (
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
      </div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.number
};

export default withRouter(Item);
