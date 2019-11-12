import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../redux/actions/userActions";
import "./updateUser.scss";
import Badge from "../components/global/Badge";
import LoadingButton from "../components/global/LoadingButton";

export class UpdateUser extends Component {
  state = {
    displayName: "",
    preference: "", // added this for input field
    preferences: [],
    country: "",
    cuisine: ""
  };

  updateStateFromProps = user => {
    this.setState({
      displayName: user.displayName || "",
      preferences: user.preferences || [],
      country: user.country || "",
      cuisine: user.cuisine || ""
    });
  };

  componentDidMount() {
    this.updateStateFromProps(this.props.user);
  }

  componentDidUpdate(prevProps) {
    if (this.props.user.isLoading !== prevProps.user.isLoading) {
      this.updateStateFromProps(this.props.user);
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  // Add badge when pressing add button
  handlePrefAdd = () => {
    const newPref = this.state.preference.trim().toLowerCase();
    if (newPref) {
      this.setState(prevState => {
        if (prevState.preferences.indexOf(newPref) > -1) {
          alert("Tag already exists");
          return prevState;
        } else {
          return {
            preferences: [...prevState.preferences, newPref]
          };
        }
      });
    }
  };

  // Remove badge when pressing x button on the badge
  handlePrefRemove = prefToRemove => {
    this.setState(prevState => {
      return {
        preferences: prevState.preferences.filter(pref => pref !== prefToRemove)
      };
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // Call action to update user info
    this.props.updateUser(this.state, this.props.history);
  };

  render() {
    const { user } = this.props;

    return (
      <div className="mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-4">
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

              <div className="form-group">
                <label htmlFor="preference">Preference</label>
                <div>
                  <input
                    type="text"
                    className="form-control pref"
                    id="preference"
                    onChange={this.handleChange}
                    value={this.state.preference}
                  />
                  <button
                    type="button"
                    onClick={this.handlePrefAdd}
                    className="btn btn-outline-success"
                  >
                    ADD
                  </button>
                </div>
              </div>

              {this.state.preferences.map((pref, i) => (
                <Badge
                  key={i}
                  pref={pref}
                  handlePrefRemove={this.handlePrefRemove}
                />
              ))}

              <div className="form-group">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  onChange={this.handleChange}
                  value={this.state.country}
                />
              </div>

              <div className="form-group">
                <label htmlFor="cuisine">Cuisine</label>
                <input
                  type="text"
                  className="form-control"
                  id="cuisine"
                  onChange={this.handleChange}
                  value={this.state.cuisine}
                />
              </div>

              <LoadingButton isLoading={user.isLoading} />
            </form>
          </div>
        </div>
      </div>
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
