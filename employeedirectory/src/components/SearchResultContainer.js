import React, { Component } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    filter: "",
    results: [],
    currentSort: "default",
    sortField: "",
    filterBy: "lastName"

  };

  // When this component mounts, search the Giphy API for pictures of employees
  componentDidMount() {
      API.search()
      .then(res => {
          console.log(res)
          this.setState({
              result: res.data.results.map((e, i) => ({
                firstName: e.name.first,
                lastName: e.name.last,
                picture: e.picture.large,
                email: e.email,
                phone: e.phone,
                dob: e.dob.age,
                key: i
              }))
          })
      })
      .catch(err => console.log(err));

      filterEmployees = (searchKey) =>{
          console.log(this.state.result);

          const filterResult = this.state.result.filter(person=> person.firstName === searchKey)

          this.setState({result:filterResult})
      }
  }


  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    this.filterEmployees(value);
    this.setState({
        [name]: value
    });
    this.filterEmployees(value);
    this.filterEmployees(this.state.search);
  };

  handleInputChange = event => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
          [name]: value
      });
  };

  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-md-14">
                  <h1>Employee Directory</h1>
              </div>
          </div>
          <div className="row">
              <div className="col-md-6">
                  <SearchForm
                  value={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        </div>
      </div>

      <div className="row">

          <table className="table">
              <tr>
                  <th scope="col">Photo</th>
                  <th>First Name</th>
                  <th scope="col">Last Name </th>
                  <th scope="col">Email </th>
                  <th scope="col">Phone </th>
                  <th scope="col">Age </th>
              </tr>
              {[...this.state.result].map((item) =>
              <EmployeeCard
              picture={item.picture}
              firstName={item.firstName}
              lastName={item.lastName}
              email={item.email}
              phone={item.phone}
              dob={item.dob}
              key={item.key}
              />
              )}

              </table>
      </div>


      </div>
    );
  }
}

export default SearchResultContainer;
