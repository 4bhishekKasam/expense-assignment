import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTotalBudget } from "../actions/index";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalBudget: ""
    };
    this.onTotalBudgetChange = this.onTotalBudgetChange.bind(this);
    this.onTotalBudgetSubmit = this.onTotalBudgetSubmit.bind(this);
  }

  onTotalBudgetChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  onTotalBudgetSubmit() {
    console.log(this.state.totalBudget);
    this.props.updateTotalBudget(this.state.totalBudget);
  }

  render() {
    return (
      <div className="container" style={{ border: ".1px solid black" }}>
        <br />
        <div className="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            {" "}
            Total Budget
          </label>
          <div className="col-sm-4">
            <input
              type="number"
              class="form-control"
              id="totalBudget"
              value={this.state.totalBudget}
              onChange={this.onTotalBudgetChange}
            />
          </div>
          <div className="col-sm-2">
            <button
              type="submit"
              class="btn btn-primary mb-3"
              onClick={this.onTotalBudgetSubmit}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { updateTotalBudget }
)(Settings);
