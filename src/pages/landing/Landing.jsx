import React, { useState, useEffect, Suspense } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { logic } from "../../logic/index";
import "./landing.css";
import Button from "@material-ui/core/Button";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

import Header from "../../components/header/Header";
import SuperHero from "../../components/superHero/SuperHero";
import StartWith from "../../components/startWith/StartWith";
import SearchFilter from "../../components/searchWithFilter/SearchWithFilter";
const Items = React.lazy(() => import("../../components/items/items"));

const Landing = props => {
  const [name] = useState(sessionStorage.getItem("name"));
  const [characters, setCharacters] = useState("");
  const [startWith] = useState("");
  const [notResults, setNotResults] = useState("");
  const [order, setOrder] = useState(true);

  useEffect(() => {
    retrieveCharacters();
  }, [startWith]);

  const retrieveCharacters = () => {
    logic.retrieveCharacters().then(res => {
      const { data } = res;
      if (data.count > 0) {
        setNotResults("");
        setCharacters(data.results);
      } else setNotResults("Upps.. no results");
    });
  };

  const changeOrder = () => {
    if (order) {
      logic.changeOrder().then(res => {
        const { results } = res.data;
        setOrder(false);
        setCharacters(results);
      });
    } else {
      setOrder(true);
      retrieveCharacters();
    }
  };

  const searchStartWith = value => {
    if (value) {
      logic.nameStartWith(value).then(res => {
        const { data } = res;
        if (data.count > 0) {
          setNotResults("");
          setCharacters(data.results);
        } else {
          setCharacters("");
          setNotResults("Upps.. no results");
        }
      });
    } else {
      retrieveCharacters();
    }
  };

  const searchFilter = (limit, value) => {
    if (limit && value) {
      logic.filterWithAppearances(limit, value).then(res => {
        if (res.length) {
          setNotResults("");
          setCharacters(res);
        } else {
          setCharacters("");
          setNotResults("Upps.. no results with this filters");
        }
      });
    } else {
      retrieveCharacters();
    }
  };

  return (
    <div>
      <Header logout={props.logout} showOptions={true} />
      <div className="container-header-landing">
        <h1 className="name-title">Welcome, {name}</h1>
        <Button
          onClick={() => changeOrder()}
          color="primary"
          variant="contained"
        >
          Change Order
          {order ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
        </Button>
      </div>
      <div className="finders">
        <SuperHero />
        <SearchFilter searchFilter={searchFilter} />
        <StartWith searchStartWith={searchStartWith} />
      </div>
      <Suspense fallback={<p className="loading">Loading...</p>}>
        {characters ? (
          <Items characters={characters} />
        ) : (
          <Items notResults={notResults} />
        )}
      </Suspense>
    </div>
  );
};

Landing.propTypes = {
  logout: PropTypes.func
};

export default withRouter(Landing);
