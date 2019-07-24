import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../actions/index";
import Pagination from "./Pagination";
import "../App.css";

const pageSize = 5;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageFromCallback: 1
    };
    this.getPageNo = this.getPageNo.bind(this);
  }

  componentWillMount() {
    this.props.fetchItems();
    console.log(this.props.items);
  }

  getPageNo(selectedPage) {
    this.setState(
      { pageFromCallback: selectedPage }
      //    , () => console.log(this.state.pageFromCallback)
    );
  }

  render() {
    const { totalBudget, items, totalExpense } = this.props;

    function noOfPage() {
      return Math.ceil(items.length / pageSize);
    }

    const pageStartIndex = pageSize * (this.state.pageFromCallback - 1);
    const pageEndIndex = Math.min(pageStartIndex + pageSize, items.length);
    const availableData = items.slice(pageStartIndex, pageEndIndex);

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
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
                data-whatever="@mdo"
              >
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
                  {availableData.map(item => (
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
          <div className="row">
            <div className="col-12">
              <Pagination pages={noOfPage()} callbackFromApp={this.getPageNo} />
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
