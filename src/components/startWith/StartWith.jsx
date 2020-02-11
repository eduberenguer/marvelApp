import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TexField from "@material-ui/core/TextField";
import "./startWith.css";

const StartWith = props => {
  const { searchStartWith } = props;
  const [startWithValue, setStartWithValue] = useState("");

  const _searchStartWith = e => {
    e.preventDefault();
    startWithValue ? searchStartWith(startWithValue) : searchStartWith();
  };

  const resetStartWith = e => {
    e.preventDefault();
    setStartWithValue("");
    searchStartWith();
  };

  return (
    <div className="container-startWith">
      <form onSubmit={e => _searchStartWith(e)}>
        <h4>Smart searcher. Write the letter/s why you want to search:</h4>
        <TexField
          type="text"
          label="Inteligent search..."
          value={startWithValue}
          className="container-input-startWith"
          onChange={e => setStartWithValue(e.target.value)}
        />
        <div>
          <Button type="submit" variant="contained" color="primary">
            Search!
          </Button>
          <Button
            onClick={e => resetStartWith(e)}
            variant="contained"
            color="primary"
          >
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

StartWith.propTypes = {
  searchStartWith: PropTypes.func
};

export default withRouter(StartWith);
