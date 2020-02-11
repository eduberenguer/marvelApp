import React, { useState } from "react";
import { withRouter } from "react-router";
import { logic } from "../../logic/index";
import "./superHero.css";
import ReactModal from "react-modal";
import Button from "@material-ui/core/Button";
import TexField from "@material-ui/core/TextField";

const SuperHero = () => {
  const [superHero, setSuperHero] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const searchHeroe = e => {
    e.preventDefault();
    logic.retrieveCharacterByName(superHero).then(res => {
      const { data } = res;
      if (data && data.count > 0) {
        setError("");
        setResult(data);
        setSuperHero("");
        setShowModal(true);
      } else {
        setShowModal(true);
        setResult("");
        setSuperHero("");
        setError("Hero not found");
      }
    });
  };

  return (
    <div className="container-superHero">
      <h4>Search you hero</h4>
      <form onSubmit={e => searchHeroe(e)}>
        <TexField
          type="text"
          label="Example: Thor..."
          onChange={e => setSuperHero(e.target.value)}
          className="container-input-superHero"
          value={superHero}
        />
        <div>
          <Button type="submit" color="primary" variant="contained">
            Search!
          </Button>
        </div>
      </form>
      <ReactModal
        isOpen={showModal}
        contentLabel="Minimal Modal Example"
        className="modal"
      >
        <Button
          className="button"
          onClick={() => setShowModal(false)}
          color="primary"
          variant="contained"
        >
          Close
        </Button>
        {result ? (
          <div className="modal-item">
            <h2>{result.results[0].name}</h2>
            {result.results[0].description ? (
              <p>{result.results[0].description}</p>
            ) : (
              <p>This character don´t have description</p>
            )}
            <img
              src={`${result.results[0].thumbnail.path}.${result.results[0].thumbnail.extension}`}
              alt={result.results[0].name}
            />
          </div>
        ) : (
          <p>{error}</p>
        )}
      </ReactModal>
    </div>
  );
};

export default withRouter(SuperHero);
