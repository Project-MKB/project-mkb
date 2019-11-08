import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../redux/actions/userActions";

export class UpdateUser extends Component {
  state = {
    displayName: "",
    preferences: [],
    photoURL: "",
    country: "",
    cuisine: ""
  };

  componentDidMount() {
    const { user } = this.props;
    console.log(user);
    this.setState({
      displayName: user.displayName || "",
      preferences: user.preferences || [],
      photoURL: user.photoURL || "",
      country: user.country || "",
      cuisine: user.cuisine || ""
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // Call action to update user info
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            className="form-control"
            id="displayName"
            onChange={this.handleChange}
            value={this.state.displayName}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  updateUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateUser);
