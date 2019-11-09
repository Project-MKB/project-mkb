import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../redux/actions/userActions";
import checkWhyRerender from "../util/checkWhyRerender";

export class UpdateUser extends Component {
  state = {
    displayName: "",
    preferences: [],
    photoURL: "",
    country: "",
    cuisine: ""
  };

  updateStateFromProps = user => {
    this.setState({
      displayName: user.displayName || "",
      preferences: user.preferences || [],
      photoURL: user.photoURL || "",
      country: user.country || "",
      cuisine: user.cuisine || ""
    });
  };

  componentDidMount() {
    this.updateStateFromProps(this.props.user);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.user.isLoading !== prevProps.user.isLoading) {
      this.updateStateFromProps(this.props.user);
    }
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
    const { user } = this.props;
    if (user.isLoading) {
      return <div>Loading...</div>;
    }

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
