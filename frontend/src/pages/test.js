import React, { Component } from "react";
import { connect } from "react-redux";

export class UpdateUser extends Component {
  state = {
    name: ""
  };

  componentDidMount() {
    const { user } = this.props;

    console.log(user); // user doesn't have name when page is refreshed

    this.setState({
      name: user.name || ""
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.displayName}
        />
        <button>Submit</button>
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
