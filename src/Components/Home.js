import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../actions/index";
import "../App.css";

class Home extends Component {
  componentWillMount() {
    this.props.fetchItems();
    console.log(this.props.items);
  }

  render() {
    const { totalBudget, items, totalExpense } = this.props;

    return (
      <div>
        <br />
        <div className="container" style={{ border: ".0px solid black" }}>
          <div className="row justify-content-between">
            <div className="col-5" style={{}}>
              <div className="row">
                <div className="col-sm-12">
               
                  <b>Budget Overview</b>{" "}
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-md-5" />
                <div className="col-md-5">
                  <p>Total Budget : {totalBudget} </p>
                  <p>Total Expense : {totalExpense} </p>
                </div>
              </div>
            </div>
            <div className="col-5" style={{}}>
              <div className="row">
                <div className="col-sm-12">
                  <b>Category wise split</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="container" style={{ border: ".0px solid black" }}>
          <div className="row">
            <div className="col-12">
              <button type="button" className="btn btn-primary float-left">
                Add Expense
              </button>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Category</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Expense date</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => (
                    <tr key={item.id}>
                      <td>
                        <i className="fa fa-pencil" aria-hidden="true" />{" "}
                      </td>
                      <td> {item.category} </td>
                      <td> {item.itemName} </td>
                      <td> {item.amount} </td>
                      <td> {item.expenseDate} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.itemsReducer.items,
    totalBudget: state.itemsReducer.totalBudget,
    totalExpense: state.itemsReducer.totalExpense
  };
};

export default connect(
  mapStateToProps,
  { fetchItems }
)(Home);
