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

  addItemToArr = (name, item) => {
    const newItem = item.trim().toLowerCase();
    if (newItem) {
      this.setState(prevState => {
        if (prevState[name].indexOf(newItem) > -1) {
          alert(`${item} already exists`);
          return prevState;
        } else {
          return {
            [name]: [...prevState[name], newItem]
          };
        }
      });
    }
  };

  removeItemFromArr = (name, itemToRemove) => {
    this.setState(prevState => {
      return {
        [name]: prevState[name].filter(item => item !== itemToRemove)
      };
    });
  };

  handlePrefAdd = () => {
    this.addItemToArr("preferences", this.state.preference);
  };

  handlePrefRemove = itemToRemove => {
    this.removeItemFromArr("preferences", itemToRemove);
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
                <input
                  type="text"
                  className="form-control"
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

              {this.state.preferences.map((pref, i) => (
                <Badge
                  key={i}
                  item={pref}
                  handleItemRemove={this.handlePrefRemove}
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser);
