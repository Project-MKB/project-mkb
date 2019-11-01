import React from "react";
import { connect } from "react-redux";
import { signoutUser } from "../../redux/actions/userActions";

const Signout = props => {
  return (
    <div>
      <button onClick={props.signoutUser}>Sign Out</button>
    </div>
  );
};

const mapActionsToProps = {
  signoutUser
};

export default connect(
  null,
  mapActionsToProps
)(Signout);
