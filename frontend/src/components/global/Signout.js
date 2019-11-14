import React from "react";
import { connect } from "react-redux";
import { signoutUser } from "../../redux/actions/userActions";

const Signout = props => {
  return (
    <button className="btn btn-warning" onClick={props.signoutUser}>
      Sign Out
    </button>
  );
};

const mapActionsToProps = {
  signoutUser
};

export default connect(
  null,
  mapActionsToProps
)(Signout);
