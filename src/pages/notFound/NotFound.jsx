import React from "react";
import { withRouter } from "react-router-dom";
import "./notFound.css";
import Button from "@material-ui/core/Button";

const NotFound = props => {
  const returnLanding = () => {
    props.history.push("/landing");
  };

  return (
    <div className="container-notFound">
      <h4>Ups...404,Page Not Found!!</h4>
      <Button
        onClick={() => returnLanding()}
        color="primary"
        variant="contained"
      >
        Return
      </Button>
    </div>
  );
};

export default withRouter(NotFound);
